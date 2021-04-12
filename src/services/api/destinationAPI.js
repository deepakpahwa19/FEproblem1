import axiosFalcone from '../axios/axiosFalcone';
import { END_POINTS, errorObject } from './apiUtil';

export const getDestinationsAPI = () => {
    return axiosFalcone
        .get(END_POINTS.getPlanets())
        .then(response => {
            return { status: 'success', data: response };
        })
        .catch(error => {
            if (error.response) {
                const { status } = error.response;
                return errorObject(status, 500, error.message);
            } else if (error.request) {
                return errorObject('', 'NO_RESPONSE_RECEIVED', error.message);
            } else {
                return errorObject('', 'NO_REQUEST_ATTACHED', error.message);
            }
        });
};
