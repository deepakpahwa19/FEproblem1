import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Dropdown from '../UI/Dropdown';
import { VehicleList } from '../Vehicle/VehicleList';
import { useDispatch } from 'react-redux';
import { getJourneyDestinationAction, getJourneyVehicleAction } from '../../redux/actions/actions/journeyActions';

export const JourneyCard = React.memo(({ index, listOfDestination, listOfVehicles }) => {
    const destinations = useMemo(() => listOfDestination.map(destination => destination.name), [listOfDestination]);
    const dispatch = useDispatch();
    const [selectedDestination, setSelectedDestination] = useState('');
    const [, setSelectedVehicle] = useState('');

    const handleSelectedDestination = useCallback(
        value => {
            const [selectedDestination] = listOfDestination.filter(destination => destination.name === value);
            setSelectedDestination(selectedDestination);
            dispatch(getJourneyDestinationAction(selectedDestination, index));
        },
        [listOfDestination, dispatch, index]
    );

    const handleSelectedVehicle = useCallback(
        value => {
            const [selectedVehicle] = listOfVehicles.filter(vehicle => vehicle.name === value);
            setSelectedVehicle(selectedVehicle);
            dispatch(getJourneyVehicleAction(selectedVehicle, index));
        },
        [listOfVehicles, dispatch, index]
    );

    return (
        <CardContainer>
            <h4>Destination {index + 1}</h4>
            <Dropdown
                name={`destination-${index}`}
                options={destinations}
                handleSelection={handleSelectedDestination}
            />
            <VehicleList
                key={`${(selectedDestination || {}).name}-${index}`}
                listOfVehicles={listOfVehicles}
                planetDistance={selectedDestination.distance}
                name={`vehicle-${index}`}
                handleSelection={handleSelectedVehicle}
            />
        </CardContainer>
    );
});

JourneyCard.propTypes = {
    listOfVehicles: PropTypes.array.isRequired,
    listOfDestination: PropTypes.array.isRequired,
    index: PropTypes.number
};

const CardContainer = styled.div`
    height: 200px;
    width: 150px;
    min-width: 150px;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    box-shadow: 0px 0px 11px 0px #888888;
`;
