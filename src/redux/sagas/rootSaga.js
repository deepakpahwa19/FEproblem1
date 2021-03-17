import { all } from 'redux-saga/effects';
import { vehicleWatcherSaga, destinationWatcherSaga, findFalconeWatcherSaga } from '../../feature/FindFalcone';
export default function* rootSaga() {
    yield all([vehicleWatcherSaga(), destinationWatcherSaga(), findFalconeWatcherSaga()]);
}
