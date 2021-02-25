import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, batch } from 'react-redux';
import { JourneyCard } from '../components/JourneyCard/JourneyCard';
import { getDestinationsAction } from '../redux/actions/actions/destinationActions';
import { getVehiclesAction } from '../redux/actions/actions/vehicleActions';

const numberOfCards = [1, 2, 3, 4];

export const FindFalconeFeature = React.memo(() => {
    const { destinations, isDestinationLoading } = useSelector(state => state.destinations);
    const { vehicles, isVehiclesLoading } = useSelector(state => state.vehicles);
    const dispatch = useDispatch();

    // console.log('destinations => ', destinations);
    // console.log('vehicles => ', vehicles);

    useEffect(() => {
        batch(() => {
            dispatch(getDestinationsAction());
            dispatch(getVehiclesAction());
        });
    }, [dispatch]);

    if (isVehiclesLoading || isDestinationLoading) return <h4>Loading...</h4>;
    return (
        <Container>
            {numberOfCards.map((card, index) => (
                <JourneyCard
                    key={`journey-${index}`}
                    index={index}
                    listOfDestination={destinations}
                    listOfVehicles={vehicles}
                />
            ))}
        </Container>
    );
});
FindFalconeFeature.propTypes = {};

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 60px auto;
`;
