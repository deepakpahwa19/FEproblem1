import { DESTINATION_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from '../../../../redux/reducers/reducerUtil';

const initialAction = {
    destinations: [],
    isDestinationLoading: true,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const destinationReducer = (state = initialAction, action) => {
    switch (action.type) {
        case DESTINATION_ACTION_TYPES.GET_DESTINATIONS:
            return updateState(state, action.payload);

        case DESTINATION_ACTION_TYPES.GET_DESTINATIONS_SUCCESS:
        case DESTINATION_ACTION_TYPES.GET_DESTINATIONS_FAILED:
            return updateState(state, action.payload, { isDestinationLoading: false });

        default:
            break;
    }
    return state;
};
