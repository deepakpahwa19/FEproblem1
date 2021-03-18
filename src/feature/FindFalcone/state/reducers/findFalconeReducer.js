import { FIND_FALCONE_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from '../../../../redux/reducers/reducerUtil';

const initialAction = {
    token: '',
    status: '',
    statusCode: '',
    errorCode: '',
    errorMessage: '',
    falconeFound: '',
    timeTake: '',
    planetName: '',
    isLoading: false
};

export const findFalconeReducer = (state = initialAction, action) => {
    switch (action.type) {
        case FIND_FALCONE_ACTION_TYPES.RESET_FIND_FALCONE:
            return updateState(initialAction, action.payload);
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE:
            return updateState(initialAction, action.payload, { isLoading: true });
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_SUCCESS:
        case FIND_FALCONE_ACTION_TYPES.FIND_FALCONE_FAILED:
            return updateState(state, action.payload, { isLoading: false });
        default:
            break;
    }
    return state;
};
