import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';
import journeyReducer from './journeyReducer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
    destinations: destinationReducer,
    journey: journeyReducer
});

export default rootReducer;
