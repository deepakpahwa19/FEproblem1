import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStateAndIndex } from '../../../logic/useStateAndIndex';
import { RadioButtonView } from '../../../views';

export const VehicleList = React.memo(({ name, planetDistance, listOfVehicles }) => {
    const [selectedVehicle, setSelectedVehicle] = useStateAndIndex('');
    return (
        <>
            {listOfVehicles.map((vehicle, index) => (
                <RadioButtonView
                    name={name}
                    value={vehicle.name}
                    key={`${name}-${vehicle.name}`}
                    isChecked={vehicle.name === selectedVehicle}
                    isDisabled={vehicle.max_distance < planetDistance}
                    onChangeHandler={setSelectedVehicle(vehicle, index)}
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
