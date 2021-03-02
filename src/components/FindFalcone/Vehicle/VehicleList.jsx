import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
// import { useStateAndIndex } from '../../../logic/useStateAndIndex';
import { RadioButtonView } from '../../../views';
import { FindFalconeContext } from '../FindFalcone';

export const VehicleList = React.memo(({ name, planetDistance }) => {
    const [selectedVehicle, setSelectedVehicle] = useState({});

    const { listOfVehicle = [] } = useContext(FindFalconeContext);

    const handleVehicleSelect = useCallback(
        event => {
            const vehicleName = event.target.value;
            const [vehicle] = listOfVehicle.filter(vehicle => vehicle.name === vehicleName);
            setSelectedVehicle(vehicle);
        },
        [listOfVehicle]
    );

    return (
        <>
            {listOfVehicle.map((vehicle, index) => (
                <RadioButtonView
                    name={name}
                    value={vehicle.name}
                    key={`${name}-${vehicle.name}`}
                    isChecked={vehicle.name === selectedVehicle.name}
                    isDisabled={vehicle.max_distance < planetDistance}
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
