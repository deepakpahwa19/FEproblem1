import { takeLatest, put } from 'redux-saga/effects';
import { TOKEN_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../constants/commonConstants';
import { getTokenAPI } from '../../services/api';
import { getTokenFailedAction, getTokenSuccessAction } from '../actions/actions';

function* tokenActionSaga(action) {
    const response = yield getTokenAPI();
    switch (response.status) {
        case STATUS.SUCCESS:
            yield put(getTokenSuccessAction(response));
            break;
        case STATUS.FAILED:
            yield put(getTokenFailedAction(response));
            break;
        default:
            break;
    }
}

export default function* tokenWatcherSaga() {
    yield takeLatest(TOKEN_ACTION_TYPES.GET_TOKEN, tokenActionSaga);
}
