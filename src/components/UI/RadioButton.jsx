import React from 'react';
import styled from 'styled-components';
export const RadioButton = React.memo(({ name, value }) => {
    return (
        <DivStyle>
            <input type='radio' name={name} value={value} id={value} />
            <Label htmlFor={value}>{value}</Label>
        </DivStyle>
    );
});

const DivStyle = styled.div`
    display: flex;
    /* flex-direction: row; */
`;

const Label = styled.label`
    margin-left: 10px;
`;
