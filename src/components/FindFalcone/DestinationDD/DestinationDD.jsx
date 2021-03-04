import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DropDown } from '../../DropDown/DropDown';
import { FindFalconeContext } from '../FindFalcone';

export const DestinationDD = React.memo(({ name, updatePlanetDistance, journeyIndex }) => {
    const [remainingDestination, setRemainingDestination] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

    const { listOfDestination, updateDestinations, destinations } = useContext(FindFalconeContext);

    useEffect(() => {
        // console.log('listOfDestination =>', listOfDestination);
        // Getting the list of name of remaining destination
        const destinationList = listOfDestination.map(destination => destination && destination.name);

        // Getting the name of selected dropdown value
        for (let index in destinations) {
            if (destinations[index].name === selectedValue) {
                destinationList[index] = destinations[index].name;
                break;
            }
        }
        // console.log('remainingDestination =>', destinationList);

        setRemainingDestination(destinationList);
    }, [listOfDestination, selectedValue, destinations]);

    const handleDropdownChange = useCallback(
        value => {
            const prevValue = selectedValue;
            const [selectedPlanet] = destinations.filter(destination => (destination || {}).name === value);
            // Updating parent component to not allow other dropdowns to use this value.
            updateDestinations(prevValue, value, journeyIndex);
            // updating planet distance to 0 if 'Select' is selected in dropdown
            updatePlanetDistance((selectedPlanet || {}).distance || 0);
            setSelectedValue(value);
        },
        [updateDestinations, selectedValue, updatePlanetDistance, destinations, journeyIndex]
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
