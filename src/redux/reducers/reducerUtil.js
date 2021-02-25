export const updateState = (state, payload, rest) => {
    return { ...state, ...payload, ...rest };
};
