import { combineReducers } from 'redux';
import { destinationReducer, findFalconeReducer, journeyReducer, vehicleReducer } from '../../feature/FindFalcone';

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
    destinations: destinationReducer,
    findFalcone: findFalconeReducer,
    journey: journeyReducer
});

export default rootReducer;
