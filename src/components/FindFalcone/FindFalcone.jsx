import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer } from '../../views';
import { JourneyCard } from './JourneyCard/JourneyCard';

export const FindFalconeContext = React.createContext();

const numberOfCards = [1, 2, 3, 4];

export const FindFalcone = React.memo(({ destinations, vehicles }) => {
    const [listOfDestination, setListOfDestination] = useState([]);
    const [listOfVehicle, setListOfVehicle] = useState([]);
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);

    useEffect(() => {
        if (destinations.length > 0 && listOfDestination.length === 0) {
            const list = destinations.map(destination => destination && { ...destination });
            const selectedList = new Array(destinations.length);
            setListOfDestination(list);
            setSelectedDestinations(selectedList);
        }

        if (vehicles.length > 0 && listOfVehicle.length === 0) {
            const list = vehicles.map(vehicle => vehicle && { ...vehicle });
            const selectedList = new Array(vehicles.length).fill(null);
            setListOfVehicle(list);
            setSelectedVehicles(selectedList);
        }
    }, [listOfDestination, destinations, listOfVehicle, vehicles]);

    const updateDestinations = useCallback(
        (prevValue, newValue) => {
            console.log({ prevValue, newValue });

            let newDestinationList = new Array(listOfDestination.length),
                newSelectedDestinationList = new Array(listOfDestination.length);

            for (let index in listOfDestination) {
                if (listOfDestination[index] && listOfDestination[index].name === newValue) {
                    newDestinationList[index] = null;
                    newSelectedDestinationList[index] = listOfDestination[index];
                } else {
                    newDestinationList[index] = listOfDestination[index] && { ...listOfDestination[index] };
                }
            }

            for (let index in selectedDestinations) {
                if (prevValue && selectedDestinations[index] && prevValue === selectedDestinations[index].name) {
                    newDestinationList[index] = selectedDestinations[index];
                    newSelectedDestinationList[index] = null;
                } else {
                    newSelectedDestinationList[index] = selectedDestinations[index] && {
                        ...selectedDestinations[index]
                    };
                }
            }

            // console.log('Old list: =>', listOfDestination);
            // console.log('Old selected: =>', selectedDestinations);
            // console.log('New list: =>', newDestinationList);

            // console.log('New selected: =>', newSelectedDestinationList);

            setListOfDestination(newDestinationList);
            setSelectedDestinations(newSelectedDestinationList);
        },
        [listOfDestination, selectedDestinations]
    );

    return (
        <FlexContainer>
            <FindFalconeContext.Provider value={{ listOfDestination, updateDestinations, destinations }}>
                {numberOfCards.map((card, index) => (
                    <JourneyCard key={`journey-${index}`} index={index} listOfVehicles={listOfVehicle} />
                ))}
            </FindFalconeContext.Provider>
        </FlexContainer>
    );
});
FindFalcone.propTypes = {
    destinations: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired
};
