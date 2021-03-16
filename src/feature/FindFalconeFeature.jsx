import React, { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { Spinner } from '../components';
import { getDestinationsAction } from '../redux/actions/actions/destinationActions';
import { getVehiclesAction } from '../redux/actions/actions/vehicleActions';
import { FindFalcone } from './FindFalcone/FindFalcone';

export const FindFalconeFeature = React.memo(() => {
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
});
FindFalconeFeature.propTypes = {};
