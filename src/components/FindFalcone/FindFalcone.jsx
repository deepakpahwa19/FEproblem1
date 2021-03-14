import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, H4, H1, H3 } from '../../views';
import { JourneyCard } from './JourneyCard/JourneyCard';
import { Button } from '../../views/CommonUI/ButtonView';
import { useDispatch, useSelector } from 'react-redux';
import { getFindFalconeAction } from '../../redux/actions/actions';
import { ErrorMessage } from '../../views/CommonUI/ErrorMessage';
import { RedirectToResult } from '../../routes/routes';

export const FindFalconeContext = React.createContext();

const numberOfCards = [1, 2, 3, 4];

export const FindFalcone = React.memo(({ destinations, vehicles }) => {
    const [listOfDestination, setListOfDestination] = useState(() =>
        destinations.map(destination => destination && { ...destination })
    );
    const [listOfVehicle, setListOfVehicle] = useState(() => vehicles.map(vehicle => vehicle && { ...vehicle }));
    const [selectedDestinations, setSelectedDestinations] = useState(() => new Array(destinations.length).fill(null));
    const journeys = useSelector(state => state.journey);
    const [isValid, setIsValid] = useState(true);
    const { errorMessage, falconeFound } = useSelector(state => state.findFalcone);

    const dispatch = useDispatch();

    /**
     * @description: To keep track of the selected destination in each destination dropdown displaying in each card
     * @summary: There will be two arrays of same length to keep track of selected destinations and remaining destinations
     * available for other dropdowns
     * @param: newValue = new selected destination
     * @param: prevValue = previous selected destination
     */
    const updateDestinations = useCallback(
        (prevValue, newValue) => {
            // creating new array to prevent mutating the state
            let newDestinationList = new Array(listOfDestination.length).fill(null),
                newSelectedDestinationList = new Array(listOfDestination.length).fill(null);

            for (let index in listOfDestination) {
                // if prevValue matches with the selectedDestinations[index] then put prevValue object into newDestinationList
                // else pass the selectedDestinations[index] value to newSelectedDestinationList[index]
                if (prevValue && selectedDestinations[index] && prevValue === selectedDestinations[index].name) {
                    newSelectedDestinationList[index] = null;
                    newDestinationList[index] = selectedDestinations[index];
                } else {
                    newSelectedDestinationList[index] = selectedDestinations[index];
                }
                // if newValue matches with the listOfDestination[index] then put newValue object into newSelectedDestinationList
                // else pass the listOfDestination[index] value to newDestinationList[index]
                if (listOfDestination[index] && listOfDestination[index].name === newValue) {
                    newSelectedDestinationList[index] = listOfDestination[index];
                    newDestinationList[index] = null;
                } else {
                    // if newDestinationList[index] does not have value then take the value from listOfDestination[index]
                    // to prevent overriding of the value done in the if condition for prevValue match
                    newDestinationList[index] = newDestinationList[index]
                        ? newDestinationList[index]
                        : listOfDestination[index];
                }
            }

            setListOfDestination(newDestinationList);
            setSelectedDestinations(newSelectedDestinationList);
        },
        [listOfDestination, selectedDestinations]
    );

    const updateVehicles = useCallback(
        (prevValue, nextValue) => {
            let newVehicleList = new Array(listOfVehicle.length).fill(null);
            for (let index in listOfVehicle) {
                newVehicleList[index] = { ...listOfVehicle[index] };
                if (listOfVehicle[index].name === nextValue) {
                    newVehicleList[index].total_no--;
                } else if (listOfVehicle[index].name === prevValue) {
                    newVehicleList[index].total_no++;
                }
            }
            setListOfVehicle(newVehicleList);
        },
        [listOfVehicle]
    );

    const timeTaken = useMemo(() => {
        let sum = 0;
        Object.values(journeys).forEach(({ planet, vehicle }) => {
            if ((planet || {}).distance && (vehicle || {}).speed) {
                sum += planet.distance / vehicle.speed;
            }
        });
        return sum;
    }, [journeys]);

    const handleFindFalconeClick = useCallback(() => {
        const selectedPlanets = [],
            selectedVehicles = [];

        Object.values(journeys).forEach(({ planet, vehicle }) => {
            if (!!(planet || {}).name) selectedPlanets.push(planet.name);
            if (!!(vehicle || {}).name) selectedVehicles.push(vehicle.name);
        });

        if (selectedPlanets.length === 4 && selectedVehicles.length === 4) {
            setIsValid(true);
            dispatch(getFindFalconeAction(selectedPlanets, selectedVehicles, timeTaken));
        } else {
            setIsValid(false);
        }
    }, [journeys, dispatch, timeTaken]);

    if (falconeFound) {
        return <RedirectToResult />;
    }

    return (
        <>
            <FlexContainer direction='column'>
                <H1>Finding Falcone!</H1>
                <H3>Select planets you want to search in:</H3>
                {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
                <FlexContainer>
                    <FindFalconeContext.Provider
                        value={{
                            listOfDestination,
                            updateDestinations,
                            destinations,
                            listOfVehicle,
                            updateVehicles,
                            isValid
                        }}
                    >
                        {numberOfCards.map((card, index) => (
                            <JourneyCard key={`journey-${index}`} index={index} isValid={isValid} />
                        ))}
                    </FindFalconeContext.Provider>
                </FlexContainer>
                <H4>Total Time: {timeTaken}</H4>
                <Button onClick={handleFindFalconeClick}>Find Falcone</Button>
            </FlexContainer>
        </>
    );
});

FindFalcone.propTypes = {
    destinations: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired
};
