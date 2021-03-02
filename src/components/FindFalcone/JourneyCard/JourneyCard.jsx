import React from 'react';
import PropTypes from 'prop-types';
import { DestinationDD } from '../DestinationDD/DestinationDD';
// import { VehicleList } from '../Vehicle/VehicleList';
// import { getJourneyDestinationAction, getJourneyVehicleAction } from '../../redux/actions/actions/journeyActions';
import { JourneyCardView } from '../../../views';

export const JourneyCard = React.memo(({ index, listOfVehicles }) => {
    // const destinations = useMemo(() => listOfDestination.map(destination => destination.name), [listOfDestination]);

    // const handleSelectedDestination = useCallback(
    //     value => {
    //         const [selectedDestination] = listOfDestination.filter(destination => destination.name === value);
    //         setSelectedDestination(selectedDestination);
    //         dispatch(getJourneyDestinationAction(selectedDestination, index));
    //     },
    //     [listOfDestination, dispatch, index]
    // );

    // const handleSelectedVehicle = useCallback(
    //     value => {
    //         const [selectedVehicle] = listOfVehicles.filter(vehicle => vehicle.name === value);
    //         setSelectedVehicle(selectedVehicle);
    //         dispatch(getJourneyVehicleAction(selectedVehicle, index));
    //     },
    //     [listOfVehicles, dispatch, index]
    // );

    return (
        <JourneyCardView>
            <h4>Destination {index + 1}</h4>
            <DestinationDD name={`destination-${index}`} />
            {/* <VehicleList
            // name={name}
            // key={`${name}-${index}`}
            // listOfVehicles={listOfVehicles}
            // planetDistance={(selectedDestination || {}).distance || 0}
            // name={`vehicle-${index}`}
            // handleSelection={handleSelectedVehicle}
            /> */}
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number
};
