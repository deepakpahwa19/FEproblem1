export const getEnvironmentName = () => (process.env.NODE_ENV === 'production' ? 'production' : 'development');
