import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinationsAction, getVehiclesAction } from './state/actions/actions/';
import { FindFalcone } from './components/';
import { Shimmer } from '../../components/Shimmer/Shimmer';

export const FindFalconeContext = React.createContext();

/**
 * @description Starting of the FindFalcone Feature
 * @returns
 */
export const FindFalconeFeature = () => {
    const { destinations, isDestinationLoading } = useSelector(state => state.destinations);
    const { vehicles, isVehiclesLoading } = useSelector(state => state.vehicles);
    const dispatch = useDispatch();
    const { key } = useSelector(state => state.findFalcone);

    useEffect(() => {
        dispatch(getDestinationsAction());
        dispatch(getVehiclesAction());
    }, [dispatch]);

    if (isVehiclesLoading || isDestinationLoading) return <Shimmer />;
    return <FindFalcone key={key} destinations={destinations} vehicles={vehicles} />;
};

FindFalconeFeature.propTypes = {};
