import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';
import findFalconeReducer from './findFalconeReducer';
import journeyReducer from './journeyReducer';
import tokenReducer from './tokenReducer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
    destinations: destinationReducer,
    token: tokenReducer,
    findFalcone: findFalconeReducer,
    journey: journeyReducer
});

export default rootReducer;
