import React, { useCallback, useState } from 'react';
import { DropDownView } from '../../views';

export const DropDown = React.memo(({ name, options, onChangeHandler }) => {
    const [value, setValue] = useState('');

    const handleChange = useCallback(
        event => {
            const value = event.target.value;
            setValue(value);
            onChangeHandler && onChangeHandler(value);
        },
        [onChangeHandler]
    );

    // console.log(`Inside dropdown => ${name}`, value, options);

    return <DropDownView name={name} id={name} value={value} options={options} onChangeHandler={handleChange} />;
});
