import { takeLatest, put } from 'redux-saga/effects';
import { FIND_FALCONE_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../constants/commonConstants';
import { getTokenAPI } from '../../services/api';
import { getFindFalconeFailedAction, getFindFalconeSuccessAction } from '../actions/actions';

function* findFalconeActionSaga(action) {
    const response = yield getTokenAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getFindFalconeSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getFindFalconeFailedAction(response));
            break;
        default:
            break;
    }
}

export default function* findFalconeWatcherSaga() {
    yield takeLatest(FIND_FALCONE_ACTION_TYPES.FIND_FALCONE, findFalconeActionSaga);
}
