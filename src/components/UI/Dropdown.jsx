import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = React.memo(({ destinationIndex, options }) => {
    return (
        <select name={`destination-${destinationIndex}`} id={`destination-${destinationIndex}`}>
            {options.map((optionValue, index) => (
                <option value={optionValue} key={index}>
                    {optionValue}
                </option>
            ))}
        </select>
    );
});

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    destinationIndex: PropTypes.number.isRequired
};

export default Dropdown;
