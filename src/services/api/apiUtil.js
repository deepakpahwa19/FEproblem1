import { FIND, PLANETS, STATUS, TOKEN, VEHICLES } from '../../constants/commonConstants';

export const errorObject = (statusCode, errorCode = '', errorMessage = '') => ({
    status: STATUS.ERROR,
    statusCode: statusCode,
    errorCode: errorCode,
    errorMessage: errorMessage
});

export const END_POINTS = {
    vehicle: `/${VEHICLES}`,
    planets: `/${PLANETS}`,
    token: `/${TOKEN}`,
    find: `/${FIND}`
};
