import { FIND_FALCONE_ACTION_TYPES } from '../actionTypes';

export const getFindFalconeAction = (planets, vehicles) => ({
    type: FIND_FALCONE_ACTION_TYPES.FIND_FALCONE,
    payload: {
        planet_names: planets,
        vehicle_names: vehicles
    }
});

export const getFindFalconeSuccessAction = payload => ({
    type: FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_SUCCESS,
    payload: payload
});

export const getFindFalconeFailedAction = payload => ({
    type: FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_FAILED,
    payload: payload
});
