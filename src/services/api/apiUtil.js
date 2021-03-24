import { STATUS } from '../../constants/commonConstants';

export const errorObject = (statusCode, errorCode, errorMessage = '') => ({
    status: STATUS.ERROR,
    statusCode: statusCode,
    errorCode: errorCode,
    errorMessage: errorMessage
});
