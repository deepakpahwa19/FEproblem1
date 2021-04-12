export const errorObject = (statusCode, errorCode, errorMessage = '') => ({
    status: 'error',
    statusCode: statusCode,
    errorCode: errorCode,
    errorMessage: errorMessage
});

export const END_POINTS = {};
