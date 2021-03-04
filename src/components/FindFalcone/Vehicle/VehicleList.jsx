import React, { useCallback, useContext, useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import { useStateAndIndex } from '../../../logic/useStateAndIndex';
import { RadioButtonView } from '../../../views';
import { FindFalconeContext } from '../FindFalcone';

export const VehicleList = React.memo(({ name, planetDistance, journeyIndex }) => {
    const [selectedVehicle, setSelectedVehicle] = useState({});
    const [remainingVehicles, setRemainingVehicles] = useState([]);
    const isSelected = useRef(false);

    const { listOfVehicle = [], updateVehicles } = useContext(FindFalconeContext);

    const handleVehicleSelect = useCallback(
        event => {
            const vehicleName = event.target.value;
            const prevVehicleName = selectedVehicle.name;
            let newSelectedVehicle,
                newVehicleList = [];
            for (let vehicle of listOfVehicle) {
                if (vehicle.name === vehicleName) {
                    newSelectedVehicle = { ...vehicle };
                    newVehicleList.push({ ...vehicle, total_no: vehicle.total_no - 1 });
                } else newVehicleList.push({ ...vehicle });
            }
            isSelected.current = true;
            setSelectedVehicle(newSelectedVehicle);
            updateVehicles(prevVehicleName, vehicleName, journeyIndex);
        },
        [listOfVehicle, updateVehicles, selectedVehicle, journeyIndex]
    );

    useEffect(() => {
        const list = [];
        let newSelectedVehicle = {};
        for (let vehicle of listOfVehicle) {
            if (vehicle.name === selectedVehicle.name) {
                if (vehicle.total_no < selectedVehicle.total_no) list.push({ ...selectedVehicle });
                else if (vehicle.total_no === selectedVehicle.total_no) {
                    newSelectedVehicle = { ...selectedVehicle, total_no: selectedVehicle.total_no + 1 };
                    list.push(newSelectedVehicle);
                }
            } else {
                list.push({ ...vehicle });
            }
        }
        if (isSelected.current && newSelectedVehicle.name) {
            isSelected.current = false;
            setSelectedVehicle(newSelectedVehicle);
        }
        setRemainingVehicles(list);
    }, [listOfVehicle, selectedVehicle]);

    return (
        <>
            {remainingVehicles.map((vehicle, index) => (
                <RadioButtonView
                    name={name}
                    value={vehicle.name}
                    key={`${name}-${vehicle.name}`}
                    isChecked={vehicle.name === selectedVehicle.name}
                    isDisabled={vehicle.max_distance < planetDistance || vehicle.total_no <= 0}
                    onChangeHandler={handleVehicleSelect}
                    label={`${vehicle.name} (${vehicle.total_no})`}
                />
            ))}
        </>
    );
});

VehicleList.propTypes = {
    name: PropTypes.string,
    planetDistance: PropTypes.number
};
