import React, { useEffect, useState, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DropDown } from '../../../../components/DropDown/DropDown';
import { FindFalconeContext } from '../../FindFalcone';
import { useDispatch, useSelector } from 'react-redux';
import { getJourneyNameWithIndex } from '../../../../constants/commonConstants';
import { getJourneyDestinationAction } from '../../../../redux/actions/actions/journeyActions';

export const DestinationDD = React.memo(({ name, journeyIndex }) => {
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

        setRemainingDestination(destinationList);
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
            <DropDown
                name={name}
                options={remainingDestination}
                onChangeHandler={handleDropdownChange}
                isValid={!isValid && !(planet || {}).name}
            />
        )
    );
});

DestinationDD.propTypes = {
    name: PropTypes.string,
    journeyIndex: PropTypes.number
};
