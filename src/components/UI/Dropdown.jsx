import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = React.memo(({ name, options, handleSelection }) => {
    const [value, setValue] = useState('Select');

    const handleChange = useCallback(
        event => {
            const value = event.target.value;
            setValue(value);
            handleSelection(value);
        },
        [handleSelection]
    );

    return (
        <select name={name} id={name} value={value} onChange={handleChange}>
            <option value='Select'>Select</option>
            {options.map((optionValue, index) => (
                <option value={optionValue} key={`${name}-${index}`}>
                    {optionValue}
                </option>
            ))}
        </select>
    );
});

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    handleSelection: PropTypes.func
};

export default Dropdown;
