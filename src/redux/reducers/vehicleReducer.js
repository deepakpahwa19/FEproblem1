import { VEHICLES_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from './reducerUtil';

const initialAction = {
    vehicles: [],
    isVehiclesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

const vehicleReducer = (state = initialAction, action) => {
    switch (action.type) {
        case VEHICLES_ACTION_TYPES.GET_VEHICLES:
            return updateState(state, action.payload, { isVehiclesLoading: true });
        case VEHICLES_ACTION_TYPES.GET_VEHICLES_SUCCESS:
        case VEHICLES_ACTION_TYPES.GET_VEHICLES_FAILED:
            return updateState(state, action.payload, { isVehiclesLoading: false });
        default:
            break;
    }
    return state;
};

export default vehicleReducer;
