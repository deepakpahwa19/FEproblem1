import React, { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Spinner } from '../../views';
import { getDestinationsAction, getVehiclesAction } from './state/actions/actions/';
import { FindFalcone } from './components/';

export const FindFalconeContext = React.createContext();

export const FindFalconeFeature = () => {
    const { destinations, isDestinationLoading } = useSelector(state => state.destinations);
    const { vehicles, isVehiclesLoading } = useSelector(state => state.vehicles);
    const dispatch = useDispatch();

    useEffect(() => {
        batch(() => {
            dispatch(getDestinationsAction());
            dispatch(getVehiclesAction());
        });
    }, [dispatch]);

    if (isVehiclesLoading || isDestinationLoading) return <Spinner />;

    return <FindFalcone destinations={destinations} vehicles={vehicles} />;
    // return <Spinner />;
};
FindFalconeFeature.propTypes = {};