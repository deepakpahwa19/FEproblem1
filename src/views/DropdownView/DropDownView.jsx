import React from 'react';
import PropTypes from 'prop-types';

export const DropDownView = React.memo(({ name, value = 'Select', options = [], onChangeHandler }) => {
    return (
        <select name={name} value={value} onChange={onChangeHandler}>
            <option value='Select'>Select</option>
            {options
                .filter(option => option !== undefined && option !== null)
                .map((optionValue, index) => (
                    <option value={optionValue} key={`${name}-${index}`}>
                        {optionValue}
                    </option>
                ))}
        </select>
    );
});

DropDownView.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    options: PropTypes.array,
    onChangeHandler: PropTypes.func
};
