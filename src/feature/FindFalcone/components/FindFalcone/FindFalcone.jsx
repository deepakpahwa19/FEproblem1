import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { JourneyCard } from '../';
import { useDispatch, useSelector } from 'react-redux';
import { getFindFalconeAction } from '../../state/actions/actions';
import { RedirectToResult } from '../../../../routes/routes';
import { Spinner, Button, ErrorMessage, FlexContainer, H4, H1, H3 } from '../../../../views';
import { listOfCards } from '../../config/findFalconConfig';

import { FindFalconeContext } from '../../FindFalconeFeature';
import { useDestinations } from '../../customHooks/useDestinations';
import { useVehicles } from '../../customHooks/useVehicles';
export const FindFalcone = ({ destinations, vehicles }) => {
    const [listOfDestination, updateDestinations] = useDestinations(destinations);

    const [listOfVehicle, updateVehicles] = useVehicles(vehicles);

    const journeys = useSelector(state => state.journey);
    const [isValid, setIsValid] = useState(true);
    const { errorMessage, falconeFound, isLoading } = useSelector(state => state.findFalcone);

    const dispatch = useDispatch();

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

        if (selectedPlanets.length === listOfCards.length && selectedVehicles.length === listOfCards.length) {
            setIsValid(true);
            dispatch(getFindFalconeAction(selectedPlanets, selectedVehicles, timeTaken));
        } else {
            setIsValid(false);
        }
    }, [journeys, dispatch, timeTaken]);

    if (falconeFound) {
        return <RedirectToResult />;
    }

    if (isLoading) {
        return <Spinner />;
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
                        {listOfCards.map((card, index) => (
                            <JourneyCard key={`journey-${index}`} index={index} isValid={isValid} />
                        ))}
                    </FindFalconeContext.Provider>
                </FlexContainer>
                <H4>Total Time: {timeTaken}</H4>
                <Button onClick={handleFindFalconeClick}>Find Falcone</Button>
            </FlexContainer>
        </>
    );
};

FindFalcone.propTypes = {
    destinations: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired
};
