import { PLANETS, STATUS, VEHICLES } from '../../constants/commonConstants';

export const errorObject = (statusCode, errorCode, errorMessage = '') => ({
    status: STATUS.ERROR,
    statusCode: statusCode,
    errorCode: errorCode,
    errorMessage: errorMessage
});

export const END_POINTS = {
    getVehicles: () => `/${VEHICLES}`,
    getPlanets: () => `/${PLANETS}`
};
