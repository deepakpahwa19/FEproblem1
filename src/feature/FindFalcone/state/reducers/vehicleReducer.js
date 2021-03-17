import { VEHICLES_ACTION_TYPES } from '../actions/actionTypes';
import { updateState } from '../../../../redux/reducers/reducerUtil';

const initialAction = {
    vehicles: [],
    isVehiclesLoading: false,
    status: '',
    statusCode: '',
    errorMessage: '',
    errorCode: ''
};

export const vehicleReducer = (state = initialAction, action) => {
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
