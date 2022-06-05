import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './RadioButton.styled';

export const RadioButton = React.memo(({ name, value, isChecked, isDisabled, onChangeHandler, label }) => {
    return (
        <Label>
            <Input
                type='radio'
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChangeHandler}
                disabled={!isChecked && isDisabled}
            />
            {label}
        </Label>
    );
});

RadioButton.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChangeHandler: PropTypes.func,
    label: PropTypes.string
};
