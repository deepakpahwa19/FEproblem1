import axiosFalcone from '../axios/axiosFalcone';
import { END_POINTS, errorObject } from './apiUtil';
import { API_ERRORS, STATUS } from '../../constants/constants';

export const getVehiclesAPI = () => {
    return axiosFalcone
        .get(END_POINTS.vehicle)
        .then(response => {
            return { status: STATUS.SUCCESS, vehicles: response.data, statusCode: response.status };
        })
        .catch(error => {
            if (error.response) {
                const { status, errorCode = 500 } = error.response;
                return errorObject(status, errorCode, error.message);
            } else if (error.request) {
                return errorObject('', API_ERRORS.NO_RESPONSE_RECEIVED, error.message);
            } else {
                return errorObject('', API_ERRORS.NO_REQUEST_ATTACHED, error.message);
            }
        });
};
