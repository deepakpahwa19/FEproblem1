import { takeLatest, put } from 'redux-saga/effects';
import { getDestinationsFailedAction, getDestinationsSuccessAction } from '../actions/actions/destinationActions';
import { getDestinationsAPI } from '../../services/api/destinationAPI';
import { DESTINATION_ACTION_TYPES } from '../actions/actionTypes';
// import { STATUS } from '../../constants/commonConstants';

function* destinationActionSaga(action) {
    const response = yield getDestinationsAPI();
    switch (response.status) {
        case 'success':
            yield put(getDestinationsSuccessAction(response));
            break;
        case 'failed':
            yield put(getDestinationsFailedAction(response));
            break;
        default:
            break;
    }
}

export default function* destinationWatcherSaga() {
    yield takeLatest(DESTINATION_ACTION_TYPES.GET_DESTINATIONS, destinationActionSaga);
}
