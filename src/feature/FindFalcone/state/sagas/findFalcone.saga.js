import { takeLatest, put } from 'redux-saga/effects';
import { FIND_FALCONE_ACTION_TYPES } from '../actions/actionTypes';
import { STATUS } from '../../../../constants/constants';
import { getTokenAPI, findFalconeAPI } from '../../../../services/api';
import { getFindFalconeFailedAction, getFindFalconeSuccessAction } from '../actions/actions';

function* findFalconeActionSaga(action) {
    let findFalconeApiResponse;
    const tokenApiResponse = yield getTokenAPI();
    if (tokenApiResponse.status !== STATUS.SUCCESS) {
        yield put(getFindFalconeFailedAction(tokenApiResponse));
    } else {
        // To keep timeTaken out of action.payload while hitting /find endPoint.
        const { timeTaken, ...newPayload } = action.payload;
        const payload = { ...newPayload, token: tokenApiResponse.token };
        findFalconeApiResponse = yield findFalconeAPI(payload);
        switch (findFalconeApiResponse.status) {
            case STATUS.SUCCESS:
                yield put(getFindFalconeSuccessAction(findFalconeApiResponse));
                break;
            case STATUS.ERROR:
                yield put(getFindFalconeFailedAction(findFalconeApiResponse));
                break;
            default:
                break;
        }
    }
}

export function* findFalconeWatcherSaga() {
    yield takeLatest(FIND_FALCONE_ACTION_TYPES.FIND_FALCONE, findFalconeActionSaga);
}
