import axiosFalcone from '../axios/axiosFalcone';
import { END_POINTS, errorObject } from './apiUtil';
import { API_ERRORS, STATUS } from '../../constants/constants';

export const getTokenAPI = () => {
    return axiosFalcone
        .post(END_POINTS.token)
        .then(response => {
            console.log('token response api hit =>', response);
            return { status: STATUS.SUCCESS, token: response.data.token, statusCode: response.status };
        })
        .catch(error => {
            if (error.response) {
                const { status } = error.response;
                return errorObject(status, 500, error.message);
            } else if (error.request) {
                return errorObject(STATUS.FAILED, API_ERRORS.NO_RESPONSE_RECEIVED, error.message);
            } else {
                return errorObject(STATUS.ERROR, API_ERRORS.NO_REQUEST_ATTACHED, error.message);
            }
        });
};
