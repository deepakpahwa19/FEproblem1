import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

export const RadioButtonList = React.memo(({ values, name, handleSelection }) => {
    const [selectedVehicle, setSelectedVehicle] = useState('');

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
            {values.map((value, index) => (
                <DivStyle key={`${value}-${index}`}>
                    <input
                        type='radio'
                        name={name}
                        value={value}
                        id={`${name}-${value}`}
                        checked={value === selectedVehicle}
                        onChange={handleChange}
                    />
                    <Label htmlFor={`${name}-${value}`}>{value}</Label>
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
