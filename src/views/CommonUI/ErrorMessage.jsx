import React from 'react';
import styled from 'styled-components';

export const ErrorMessage = React.memo(({ children }) => {
    return <ErrorMessageUI>{children}</ErrorMessageUI>;
});

const ErrorMessageUI = styled.h5`
    margin: 1rem;
    color: red;
    text-align: center;
`;
