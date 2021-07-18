import { VEHICLES_ACTION_TYPES } from '../actionTypes';

export const getVehiclesAction = () => ({
    type: VEHICLES_ACTION_TYPES.GET_VEHICLES
});

export const getVehiclesSuccessAction = payload => ({
    type: VEHICLES_ACTION_TYPES.GET_VEHICLES_SUCCESS,
    payload: payload
});

export const getVehiclesFailedAction = payload => ({
    type: VEHICLES_ACTION_TYPES.GET_VEHICLES_FAILED,
    payload: payload
});
