import { combineReducers } from 'redux';
import destinationReducer from './destinationReducer';

const rootReducer = combineReducers({
    destinations: destinationReducer
});

export default rootReducer;
