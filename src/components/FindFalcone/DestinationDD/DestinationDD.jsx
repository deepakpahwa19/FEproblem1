import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DropDown } from '../../DropDown/DropDown';
import { FindFalconeContext } from '../FindFalconeFeature';

export const DestinationDD = React.memo(({ name }) => {
    const [remainingDestination, setRemainingDestination] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedIndex, setSelectedIndex] = useState('');

    const { listOfDestination, updateDestinations } = useContext(FindFalconeContext);

    useEffect(() => {
        console.log('listOfDestination =>', listOfDestination);
        const destinationList = listOfDestination.map(destination => destination && destination.name);
        if (selectedValue) {
            destinationList[selectedIndex] = selectedValue;
        }
        console.log('remainingDestination =>', destinationList);
        setRemainingDestination(destinationList);
    }, [listOfDestination, selectedIndex, selectedValue]);

    const handleDropdownChange = useCallback(
        (value, index) => {
            const prevValue = selectedValue;
            updateDestinations(prevValue, value);
            setSelectedValue(value);
            setSelectedIndex(index);
        },
        [updateDestinations, selectedValue]
    );

    return (
        remainingDestination.length > 0 && (
            <DropDown name={name} options={remainingDestination} onChangeHandler={handleDropdownChange} />
        )
    );
});

DestinationDD.propTypes = {
    name: PropTypes.string,
    handleSelection: PropTypes.func
};
