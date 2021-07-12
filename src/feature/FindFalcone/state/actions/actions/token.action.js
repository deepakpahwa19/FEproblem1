import { TOKEN_ACTION_TYPES } from '../actionTypes';

export const getTokenAction = () => ({
    type: TOKEN_ACTION_TYPES.GET_TOKEN
});

export const getTokenSuccessAction = payload => ({
    type: TOKEN_ACTION_TYPES.GET_TOKEN_SUCCESS,
    payload: payload
});

export const getTokenFailedAction = payload => ({
    type: TOKEN_ACTION_TYPES.GET_TOKEN_FAILED,
    payload: payload
});
