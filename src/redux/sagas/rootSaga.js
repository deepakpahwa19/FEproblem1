import { all } from 'redux-saga/effects';
import destinationWatcherSaga from './destinationSaga';
import findFalconeWatcherSaga from './findFalconeSaga';
import tokenWatcherSaga from './tokenSaga';
import vehicleWatcherSaga from './vehicleSaga';

export default function* rootSaga() {
    yield all([vehicleWatcherSaga(), destinationWatcherSaga(), tokenWatcherSaga(), findFalconeWatcherSaga()]);
}
