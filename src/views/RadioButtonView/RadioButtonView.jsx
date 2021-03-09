import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const RadioButtonView = React.memo(({ name, value, isChecked, isDisabled, onChangeHandler, label }) => {
    return (
        <Label>
            <Input
                type='radio'
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChangeHandler}
                disabled={isDisabled}
            />
            {label}
        </Label>
    );
});

RadioButtonView.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    label: PropTypes.string
};

const Label = styled.label`
    padding: 2px;
`;
const Input = styled.input`
    margin-right: 10px;
`;
