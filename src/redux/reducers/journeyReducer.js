import { JOURNEY_ACTION_TYPES } from '../actions/actionTypes';

const journey = {
    selectedDestination: {},
    selectedVehicle: {}
};

const initialState = {
    journey_0: { ...journey },
    journey_1: { ...journey },
    journey_2: { ...journey },
    journey_3: { ...journey }
};
const journeyReducer = (state = initialState, action) => {
    let journeyNumber;
    switch (action.type) {
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION_0:
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION_1:
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION_2:
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION_3:
            console.log('action =>', action);
            journeyNumber = `journey_${action.journeyIndex}`;
            return {
                ...state,
                [journeyNumber]: {
                    ...state[journeyNumber],
                    selectedDestination: action.payload
                        ? {
                              ...state[journeyNumber].selectedDestination,
                              ...action.payload
                          }
                        : {}
                }
            };

        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE_0:
        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE_1:
        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE_2:
        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE_3:
            console.log('action =>', action);
            journeyNumber = `journey_${action.journeyIndex}`;
            return {
                ...state,
                [journeyNumber]: {
                    ...state[journeyNumber],
                    selectedVehicle: action.payload
                        ? {
                              ...state[journeyNumber].selectedVehicle,
                              ...action.payload
                          }
                        : {}
                }
            };

        default:
            break;
    }
    return state;
};

export default journeyReducer;
