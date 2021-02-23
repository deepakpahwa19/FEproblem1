import { all } from 'redux-saga/effects';
import destinationWatcherSaga from './destinationSaga';
import vehicleWatcherSaga from './vehicleSaga';

export default function* rootSaga() {
    yield all([vehicleWatcherSaga(), destinationWatcherSaga()]);
}
