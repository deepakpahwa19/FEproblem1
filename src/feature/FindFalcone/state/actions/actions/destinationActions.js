import { DESTINATION_ACTION_TYPES } from '../actionTypes';

export const getDestinationsAction = () => ({
    type: DESTINATION_ACTION_TYPES.GET_DESTINATIONS
});

export const getDestinationsSuccessAction = payload => ({
    type: DESTINATION_ACTION_TYPES.GET_DESTINATIONS_SUCCESS,
    payload: payload
});

export const getDestinationsFailedAction = payload => ({
    type: DESTINATION_ACTION_TYPES.GET_DESTINATIONS_FAILED,
    payload: payload
});
