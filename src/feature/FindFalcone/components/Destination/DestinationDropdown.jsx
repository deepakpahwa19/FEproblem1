import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { AutoComplete } from '../../../../views';
import { FindFalconeContext } from '../../FindFalconeFeature';
import { getJourneyNameWithIndex } from '../../constants/constants';
import { getJourneyDestinationAction } from '../../state/actions/actions/journeyActions';

/**
 * @param {name} name
 * @param {journeyIndex} journeyIndex
 * @description An autocomplete dropdown
 * @returns
 */
export const DestinationDropdown = ({ name, journeyIndex }) => {
    const [remainingDestination, setRemainingDestination] = useState([]);
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(journeyIndex)]);
    const dispatch = useDispatch();

    const { listOfDestination, updateDestinations, destinations, updateVehicles, isValid } = useContext(
        FindFalconeContext
    );

    useEffect(() => {
        // Getting the list of name of remaining destination
        const destinationList = listOfDestination.map(destination => destination && destination.name);

        // Adding the name of selected planet name to the dropdown
        if (planet)
            for (let index in destinations) {
                if (destinations[index].name === planet.name) {
                    destinationList[index] = destinations[index].name;
                    break;
                }
            }

        // Removing the Null from the list
        const newDest = destinationList.filter(value => !!value);
        setRemainingDestination(newDest);
    }, [listOfDestination, planet, destinations, journeyIndex]);

    const handleDropdownChange = useCallback(
        value => {
            const prevValue = (planet || {}).name;
            const [selectedPlanet] = destinations.filter(destination => (destination || {}).name === value);
            // Updating the vehicle name total_no in through Context API
            if (vehicle) updateVehicles(vehicle.name, '');
            // Updating parent component to not allow other dropdowns to use this value.
            updateDestinations(prevValue, value);
            // setSelectedValue(value);
            dispatch(getJourneyDestinationAction(selectedPlanet, journeyIndex));
        },
        [updateDestinations, updateVehicles, planet, dispatch, destinations, journeyIndex, vehicle]
    );

    return (
        remainingDestination.length > 0 && (
            <AutoComplete
                id={name}
                options={remainingDestination}
                onSelect={handleDropdownChange}
                isValid={!isValid && !(planet || {}).name}
            />
        )
    );
};

DestinationDropdown.propTypes = {
    name: PropTypes.string,
    journeyIndex: PropTypes.number
};
