import { getJourneyNameWithIndex } from '../../constants/commonConstants';
import { JOURNEY_ACTION_TYPES } from '../actions/actionTypes';

const initialState = {
    journey_0: {},
    journey_1: {},
    journey_2: {},
    journey_3: {}
};
const journeyReducer = (state = initialState, action) => {
    let payload = {},
        journeyName = '';
    switch (action.type) {
        case JOURNEY_ACTION_TYPES.UPDATE_DESTINATION:
            payload = action.payload;
            journeyName = getJourneyNameWithIndex(action.journeyIndex);
            return {
                ...state,
                [journeyName]: {
                    ...payload,
                    vehicle: null
                }
            };
        case JOURNEY_ACTION_TYPES.UPDATE_VEHICLE:
            payload = action.payload;
            journeyName = getJourneyNameWithIndex(action.journeyIndex);
            return {
                ...state,
                [journeyName]: {
                    ...state[journeyName],
                    ...payload
                }
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
