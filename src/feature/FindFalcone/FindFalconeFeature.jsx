import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spinner } from '../../views';
import { getDestinationsAction, getVehiclesAction } from './state/actions/actions/';
import { FindFalcone } from './components/';

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

    console.log('key : ', key);
    useEffect(() => {
        dispatch(getDestinationsAction());
        dispatch(getVehiclesAction());
    }, [dispatch]);

    if (isVehiclesLoading || isDestinationLoading) return <Spinner />;

    return <FindFalcone key={key} keyValue={key} destinations={destinations} vehicles={vehicles} />;
};

FindFalconeFeature.propTypes = {};
