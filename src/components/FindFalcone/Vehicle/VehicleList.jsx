import React, { useCallback, useContext, useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { RadioButtonView } from '../../../views';
import { FindFalconeContext } from '../FindFalcone';
import { getJourneyNameWithIndex } from '../../../constants/commonConstants';
import { getJourneyVehicleAction } from '../../../redux/actions/actions/journeyActions';

export const VehicleList = React.memo(({ name, planetDistance, journeyIndex }) => {
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(journeyIndex)]);
    const dispatch = useDispatch();

    const [remainingVehicles, setRemainingVehicles] = useState([]);
    const isSelected = useRef(false);
    // const [selectedVehicleName, setSelectedVehicleName] = useState(null);

    const { listOfVehicle = [], updateVehicles } = useContext(FindFalconeContext);

    const handleVehicleSelect = useCallback(
        event => {
            const vehicleName = event.target.value;
            const prevVehicleName = (vehicle || {}).name;
            for (let currentVehicle of listOfVehicle) {
                if (currentVehicle.name === vehicleName) {
                    dispatch(getJourneyVehicleAction(currentVehicle, journeyIndex));
                    break;
                }
            }
            isSelected.current = true;
            // setSelectedVehicleName(vehicleName);
            updateVehicles(prevVehicleName, vehicleName);
        },
        [listOfVehicle, updateVehicles, dispatch, vehicle, journeyIndex]
    );

    useEffect(() => {
        const list = [];
        let newSelectedVehicle = {};
        for (let currentVehicle of listOfVehicle) {
            if (vehicle && vehicle.name === currentVehicle.name) {
                if (currentVehicle.total_no < vehicle.total_no) list.push({ ...vehicle });
                else if (currentVehicle.total_no === vehicle.total_no) {
                    newSelectedVehicle = { ...vehicle, total_no: vehicle.total_no + 1 };
                    list.push(newSelectedVehicle);
                }
            } else {
                list.push({ ...currentVehicle });
            }
        }
        if (isSelected.current && newSelectedVehicle.name) {
            isSelected.current = false;
            dispatch(getJourneyVehicleAction(newSelectedVehicle, journeyIndex));
        }
        setRemainingVehicles(list);
    }, [listOfVehicle, vehicle, dispatch, journeyIndex]);

    // useEffect(() => {
    //     if ((planet || {}).name && selectedVehicleName)
    //         // Selecting destination will render the vehicleList again with no value selected,
    //         // so increasing the total_no of previously selected vehicle
    //         updateVehicles(selectedVehicleName, '');
    // }, [planet, updateVehicles, selectedVehicleName]);

    // Not showing Vehicle List if no destination is selected
    if (!(planet || {}).name) {
        return <></>;
    }

    return (
        <>
            {remainingVehicles.map((currentVehicle, index) => (
                <RadioButtonView
                    name={name}
                    value={currentVehicle.name}
                    key={`${name}-${currentVehicle.name}`}
                    isChecked={vehicle && vehicle.name === currentVehicle.name}
                    isDisabled={currentVehicle.max_distance < planet.distance || currentVehicle.total_no <= 0}
                    onChangeHandler={handleVehicleSelect}
                    label={`${currentVehicle.name} (${currentVehicle.total_no})`}
                />
            ))}
        </>
    );
});

VehicleList.propTypes = {
    name: PropTypes.string,
    planetDistance: PropTypes.number
};
