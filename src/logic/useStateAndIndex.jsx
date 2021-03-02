import { useCallback, useState } from 'react';

export const useStateAndIndex = ({ initialValue = '' }) => {
    const [state, setState] = useState(initialValue);
    const [index, setIndex] = useState('');

    const onChangeHandler = useCallback(
        (value, index) => () => {
            setState(value);
            setIndex(index);
        },
        []
    );

    return [state, onChangeHandler, index];
};
