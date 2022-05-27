import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { FindFalconeContext } from '../../FindFalconeFeature';
import { useDestinations } from '../../customHooks/useDestinations';
import { useVehicles } from '../../customHooks/useVehicles';
import { FindFalconeView } from './FindFalcone.view';
import { listOfCards } from '../../config/findFalcon.config';
import { getFindFalconeAction } from '../../state/actions/actions';

/**
 * @param {destinations}
 * @param {vehicles}
 * @returns
 */

export const FindFalcone = ({ destinations, vehicles }) => {
    const [isValid, setIsValid] = useState(true);

    const [listOfDestination, updateDestinations] = useDestinations(destinations);
    const [listOfVehicle, updateVehicles] = useVehicles(vehicles);

    const { errorMessage, falconeFound, isLoading } = useSelector(state => state.findFalcone);
    const journeys = useSelector(state => state.journey);

    const dispatch = useDispatch();

    const timeTaken = useMemo(() => {
        let sum = 0;
        Object.values(journeys).forEach(({ planet, vehicle }) => {
            if (planet?.distance && vehicle?.speed) {
                sum += planet.distance / vehicle.speed;
            }
        });
        return sum;
    }, [journeys]);

    const onClickFindFalconeHandler = useCallback(() => {
        const selectedPlanets = [],
            selectedVehicles = [];

        Object.values(journeys).forEach(({ planet, vehicle }) => {
            if (!!planet?.name) selectedPlanets.push(planet.name);
            if (!!vehicle?.name) selectedVehicles.push(vehicle.name);
        });

        if (selectedPlanets.length === listOfCards.length && selectedVehicles.length === listOfCards.length) {
            setIsValid(true);
            dispatch(getFindFalconeAction(selectedPlanets, selectedVehicles, timeTaken));
        } else {
            setIsValid(false);
        }
    }, [journeys, dispatch, timeTaken]);

    return (
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
            <FindFalconeView
                timeTaken={timeTaken}
                onClickFindFalconeHandler={onClickFindFalconeHandler}
                errorMessage={errorMessage}
                falconeFound={falconeFound}
                isLoading={isLoading}
                isValid={isValid}
            />
        </FindFalconeContext.Provider>
    );
};

FindFalcone.propTypes = {
    destinations: PropTypes.array.isRequired,
    vehicles: PropTypes.array.isRequired
};
