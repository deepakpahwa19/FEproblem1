import { JOURNEY_ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    listOfSelectedDestination: new Array(4).fill(null),
    listOfSelectedVehicle: new Array(4).fill(null)
};
const journeyReducer = (state = initialState, action) => {
    switch (action.type) {
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION:
            return {
                ...state,
                listOfSelectedDestination: getUpdatedList(
                    [...state.listOfSelectedDestination],
                    action.journeyIndex,
                    (action.payload || {}).name || null
                ),
                listOfSelectedVehicle: getUpdatedList([...state.listOfSelectedVehicle], action.journeyIndex, null)
            };
        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE:
            return {
                ...state,
                listOfSelectedVehicle: getUpdatedList(
                    [...state.listOfSelectedVehicle],
                    action.journeyIndex,
                    (action.payload || {}).name || null
                )
            };
        default:
            break;
    }
    return state;
};

export default journeyReducer;

const getUpdatedList = (list, index, value) => {
    list[index] = value;
    return list;
};
