import React from 'react';
import PropTypes from 'prop-types';

export const RadioButtonView = React.memo(({ name, value, isChecked, isDisabled, onChangeHandler, label }) => {
    return (
        <label>
            <input
                type='radio'
                name={name}
                value={value}
                checked={isChecked}
                onChange={onChangeHandler}
                disabled={isDisabled}
            />
            {label}
        </label>
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
