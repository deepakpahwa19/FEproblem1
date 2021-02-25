import { JOURNEY_ACTION_TYPES } from '../actionTypes';

export const getJourneyDestinationAction = (payload, journeyIndex) => {
    return {
        type: `${JOURNEY_ACTION_TYPES.UPDATE_DESTINATION}${journeyIndex}`,
        payload: payload,
        journeyIndex: journeyIndex
    };
};

export const getJourneyVehicleAction = (payload, journeyIndex) => {
    return {
        type: `${JOURNEY_ACTION_TYPES.UPDATE_VEHICLE}${journeyIndex}`,
        payload: payload,
        journeyIndex: journeyIndex
    };
};
