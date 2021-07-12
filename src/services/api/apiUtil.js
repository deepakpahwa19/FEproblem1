import { FIND, PLANETS, TOKEN, VEHICLES } from '../../feature/FindFalcone/constants/constants';
import { STATUS } from '../../constants/constants';

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
