import { all } from 'redux-saga/effects';
import destinationWatcherSaga from './destinationSaga';

export default function* rootSaga() {
    yield all([destinationWatcherSaga()]);
}
