import axiosFalcone from '../axios/axiosFalcone';
import { END_POINTS, errorObject } from './apiUtil';
import { API_ERRORS, STATUS } from '../../constants/commonConstants';

export const findFalconeAPI = requestBody => {
    return axiosFalcone
        .post(END_POINTS.find, requestBody)
        .then(response => {
            return { status: response.status, planetName: response.planet_name, statusCode: response.status };
        })
        .catch(error => {
            console.log('findFalconeAPI =>', error, error.response, error.message);
            if (error.response) {
                const { status, data } = error.response;
                return errorObject(status, '', data.error);
            } else if (error.request) {
                return errorObject('', API_ERRORS.NO_RESPONSE_RECEIVED, error.message);
            } else {
                return errorObject('', API_ERRORS.NO_REQUEST_ATTACHED, error.message);
            }
        });
};
