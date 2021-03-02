import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { getDestinationsAction } from '../../redux/actions/actions/destinationActions';
import { getVehiclesAction } from '../../redux/actions/actions/vehicleActions';
import { FlexContainer } from '../../views';
import { JourneyCard } from './JourneyCard/JourneyCard';

export const FindFalconeContext = React.createContext();

const numberOfCards = [1, 2, 3, 4];

export const FindFalconeFeature = React.memo(() => {
    const { destinations, isDestinationLoading } = useSelector(state => state.destinations);
    const { vehicles, isVehiclesLoading } = useSelector(state => state.vehicles);

    const [listOfDestination, setListOfDestination] = useState([]);
    const [listOfVehicle, setListOfVehicle] = useState([]);
    const [selectedDestinations, setSelectedDestinations] = useState([]);
    const [selectedVehicles, setSelectedVehicles] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(getDestinationsAction());
            dispatch(getVehiclesAction());
        });
    }, [dispatch]);

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

            console.log('Old list: =>', listOfDestination);
            console.log('Old selected: =>', selectedDestinations);
            console.log('New list: =>', newDestinationList);

            console.log('New selected: =>', newSelectedDestinationList);

            setListOfDestination(newDestinationList);
            setSelectedDestinations(newSelectedDestinationList);
        },
        [listOfDestination, selectedDestinations]
    );

    if (isVehiclesLoading || isDestinationLoading) return <h4>Loading...</h4>;

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
FindFalconeFeature.propTypes = {};
