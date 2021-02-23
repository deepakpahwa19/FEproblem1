import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';
import vehicleReducer from './vehicleReducer';

const rootReducer = combineReducers({
    vehicles: vehicleReducer,
    destinations: destinationReducer
});

export default rootReducer;
