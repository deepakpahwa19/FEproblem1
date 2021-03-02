import React, { useCallback, useState } from 'react';
import { DropDownView } from '../../views';

export const DropDown = React.memo(({ name, options, onChangeHandler }) => {
    const [value, setValue] = useState('');
    const [, setSelectedIndex] = useState('');

    const handleChange = useCallback(
        event => {
            const index = event.target.selectedIndex - 1; // because 0 is 'Select' which is not part of Options array
            const value = event.target.value;
            setValue(event.target.value);
            setSelectedIndex(value);
            onChangeHandler && onChangeHandler(value, index);
        },
        [onChangeHandler]
    );

    return <DropDownView name={name} id={name} value={value} options={options} onChangeHandler={handleChange} />;
});
