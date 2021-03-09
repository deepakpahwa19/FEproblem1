import React, { useCallback, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { FlexContainer, H4 } from '../../views';
import { JourneyCard } from './JourneyCard/JourneyCard';
import { Button } from '../../views/CommonUI/ButtonView';
import { useDispatch } from 'react-redux';
import { getFindFalconeAction } from '../../redux/actions/actions/findFalconeActions';

export const FindFalconeContext = React.createContext();

const numberOfCards = [1, 2, 3, 4];

export const FindFalcone = React.memo(({ destinations, vehicles }) => {
    const [listOfDestination, setListOfDestination] = useState(() =>
        destinations.map(destination => destination && { ...destination })
    );
    const [listOfVehicle, setListOfVehicle] = useState(() => vehicles.map(vehicle => vehicle && { ...vehicle }));
    const [selectedDestinations, setSelectedDestinations] = useState(() => new Array(destinations.length));
    const [selectedVehicles, setSelectedVehicles] = useState(new Array(vehicles.length));
    const dispatch = useDispatch();
    const [journeyDetail, setJourneyDetail] = useState(() => new Array(numberOfCards.length).fill({}));

    // useEffect(() => {
    //     // Creating local listOfDestination array from destinations from redux
    //     if (destinations.length > 0 && listOfDestination.length === 0) {
    //         const list = destinations.map(destination => destination && { ...destination });
    //         const selectedList = new Array(destinations.length);
    //         setListOfDestination(list);
    //         setSelectedDestinations(selectedList);
    //     }

    //     // Creating local listOfVehicle array from vehicles from redux
    //     if (vehicles.length > 0 && listOfVehicle.length === 0) {
    //         const list = vehicles.map(vehicle => vehicle && { ...vehicle });
    //         const selectedList = new Array(vehicles.length);
    //         setListOfVehicle(list);
    //         setSelectedVehicles(selectedList);
    //     }
    // }, [listOfDestination, destinations, listOfVehicle, vehicles]);

    const getTotalTime = useMemo(() => {
        let sum = 0;
        journeyDetail.forEach(journey => {
            if (journey.distance && journey.speed) {
                sum += journey.distance / journey.speed;
            }
        });
        return sum;
    }, [journeyDetail]);

    /**
     * @description: To keep track of the selected destination in each destination dropdown displaying in each card
     * @summary: There will be two array of same length to keep track of selected destinations and remaining destinations
     * available for other dropdowns
     * @param: newValue = new selected destination
     * @param: prevValue = previous selected destination
     */
    const updateDestinations = useCallback(
        (prevValue, newValue, journeyIndex) => {
            // creating new array to prevent mutating the state
            let newDestinationList = new Array(listOfDestination.length),
                newSelectedDestinationList = new Array(listOfDestination.length),
                newJourneyDetail = journeyDetail.map(journey => ({ ...journey }));

            for (let index in listOfDestination) {
                // if destination.name at index matches the newValue then saving the destination in selectedDestinations state
                if (listOfDestination[index] && listOfDestination[index].name === newValue) {
                    newDestinationList[index] = null;
                    newSelectedDestinationList[index] = listOfDestination[index];
                    // newJourneyDetail[journeyIndex].distance = listOfDestination[index].distance;
                    // newJourneyDetail[journeyIndex].speed = 0;
                } else {
                    newDestinationList[index] = listOfDestination[index] && { ...listOfDestination[index] };
                }
            }

            for (let index in selectedDestinations) {
                // if destination.name at index matches the prevValue then saving the destination in listOfDestination state and marking
                if (prevValue && selectedDestinations[index] && prevValue === selectedDestinations[index].name) {
                    newDestinationList[index] = selectedDestinations[index];
                    newSelectedDestinationList[index] = null;
                } else {
                    newSelectedDestinationList[index] = selectedDestinations[index] && {
                        ...selectedDestinations[index]
                    };
                }
            }

            setJourneyDetail(newJourneyDetail);
            setListOfDestination(newDestinationList);
            setSelectedDestinations(newSelectedDestinationList);
        },
        [listOfDestination, selectedDestinations, journeyDetail]
    );

    const updateVehicles = useCallback(
        (prevValue, nextValue, journeyIndex) => {
            let newVehicleList = new Array(listOfVehicle.length),
                newSelectedVehicleList = new Array(listOfVehicle.length),
                newJourneyDetail = journeyDetail.map(journey => ({ ...journey }));
            for (let index in listOfVehicle) {
                newVehicleList[index] = { ...listOfVehicle[index] };
                if (listOfVehicle[index].name === nextValue) {
                    newVehicleList[index].total_no--;
                    newSelectedVehicleList[index] = { ...listOfVehicle[index] };
                    newJourneyDetail[journeyIndex].speed = listOfVehicle[index].speed;
                } else if (listOfVehicle[index].name === prevValue) {
                    newVehicleList[index].total_no++;
                }
            }
            setJourneyDetail(newJourneyDetail);
            setListOfVehicle(newVehicleList);
            setSelectedVehicles(newSelectedVehicleList);
        },
        [listOfVehicle, journeyDetail]
    );

    const handleFindFalcone = useCallback(() => {
        console.log('InsideFind Falcone button');
        console.log(selectedDestinations, selectedVehicles);
        const listOfSelectedDestination = selectedDestinations
            .filter(destination => !destination)
            .map(destination => destination.name);
        const listOfSelectedVehicle = selectedVehicles.filter(vehicle => !vehicle).map(vehicle => vehicle.name);
        console.log(listOfSelectedVehicle, listOfSelectedVehicle);
        dispatch(getFindFalconeAction(listOfSelectedDestination, listOfSelectedVehicle));
    }, [selectedDestinations, selectedVehicles, dispatch]);

    return (
        <>
            <FlexContainer direction='column'>
                <FlexContainer>
                    <FindFalconeContext.Provider
                        value={{
                            listOfDestination,
                            updateDestinations,
                            destinations,
                            listOfVehicle,
                            updateVehicles
                        }}
                    >
                        {numberOfCards.map((card, index) => (
                            <JourneyCard key={`journey-${index}`} index={index} />
                        ))}
                    </FindFalconeContext.Provider>
                </FlexContainer>
                <H4>Total Time: {getTotalTime}</H4>
                <Button onClick={handleFindFalcone}>Find Falcone</Button>
            </FlexContainer>
        </>
    );
});

FindFalcone.propTypes = {
    destinations: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired
};
