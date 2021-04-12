import React, { useCallback, useState } from 'react';
import { DropDownView } from '../../views';
import PropTypes from 'prop-types';

export const DropDown = ({ name, options, onChangeHandler, isValid }) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback(
        event => {
            const value = event.target.value;
            setValue(value);
            onChangeHandler && onChangeHandler(value);
        },
        [onChangeHandler]
    );

    return (
        <>
            <h1>Testing Jest</h1>
            <DropDownView
                name={name}
                id={name}
                value={value}
                options={options}
                onChangeHandler={handleChange}
                isValid={isValid}
            />
        </>
    );
};

DropDown.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func,
    isValid: PropTypes.bool
};
