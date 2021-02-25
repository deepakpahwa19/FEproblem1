import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export const VehicleList = React.memo(({ listOfVehicles, name, handleSelection, planetDistance }) => {
    const [selectedVehicle, setSelectedVehicle] = useState('');
    // const vehicles = listOfVehicles.map(vehicle => vehicle.name) || [];

    const handleChange = useCallback(
        event => {
            const value = event.target.value;
            setSelectedVehicle(value);
            handleSelection(value);
        },
        [handleSelection]
    );

    return (
        <>
            {listOfVehicles.map((vehicle, index) => (
                <DivStyle key={`${vehicle.name}-${index}`}>
                    <input
                        type='radio'
                        name={name}
                        value={vehicle.name}
                        id={`${name}-${vehicle.name}`}
                        checked={vehicle.name === selectedVehicle}
                        onChange={handleChange}
                        disabled={vehicle.max_distance < planetDistance}
                    />
                    <Label htmlFor={`${name}-${vehicle.name}`}>{`${vehicle.name} (${vehicle.total_no})`}</Label>
                </DivStyle>
            ))}
        </>
    );
});

const DivStyle = styled.div`
    display: flex;
    /* flex-direction: row; */
`;

const Label = styled.label`
    margin-left: 10px;
`;
