import { TOKEN_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    token: '',
    status: '',
    statusCode: '',
    errorCode: '',
    errorMessage: ''
};

const tokenReducer = (state = initialAction, action) => {
    switch (action.type) {
        case TOKEN_ACTION_TYPES.GET_TOKEN:
            return updateState(state, action.payload);
        case TOKEN_ACTION_TYPES.GET_TOKEN_SUCCESS:
        case TOKEN_ACTION_TYPES.GET_TOKEN_FAILED:
            return updateState(state, action.payload);
        default:
            break;
    }
    return state;
};

export default tokenReducer;
