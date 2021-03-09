import { JOURNEY_ACTION_TYPES } from '../actionTypes';

export const getJourneyDestinationAction = (planet, journeyIndex) => {
    return {
        type: JOURNEY_ACTION_TYPES.UPDATE_DESTINATION,
        payload: { planet: { ...planet } },
        journeyIndex: journeyIndex
    };
};

export const getJourneyVehicleAction = (vehicle, journeyIndex) => {
    return {
        type: JOURNEY_ACTION_TYPES.UPDATE_VEHICLE,
        payload: { vehicle: { ...vehicle } },
        journeyIndex: journeyIndex
    };
};
