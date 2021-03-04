import React, { useEffect } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { getDestinationsAction } from '../redux/actions/actions/destinationActions';
import { getVehiclesAction } from '../redux/actions/actions/vehicleActions';
import { FindFalcone } from '../components/FindFalcone/FindFalcone';

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

    if (isVehiclesLoading || isDestinationLoading) return <h4>Loading...</h4>;

    return <FindFalcone destinations={destinations} vehicles={vehicles} />;
});
FindFalconeFeature.propTypes = {};
