import { JOURNEY_ACTION_TYPES } from '../actionTypes';

export const getJourneyDestinationAction = (payload, journeyIndex) => {
    return {
        type: JOURNEY_ACTION_TYPES.UPDATE_DESTINATION,
        payload: payload,
        journeyIndex: journeyIndex
    };
};

export const getJourneyVehicleAction = (payload, journeyIndex) => {
    return {
        type: JOURNEY_ACTION_TYPES.UPDATE_VEHICLE,
        payload: payload,
        journeyIndex: journeyIndex
    };
};
