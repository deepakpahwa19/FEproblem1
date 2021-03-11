import React from 'react';
import styled from 'styled-components';

export const RequiredElement = React.memo(({ message, align }) => {
    return <RequiredElementUI align={align}>{message || '*required'}</RequiredElementUI>;
});

const RequiredElementUI = styled.p`
    font-size: 1rem;
    text-align: ${({ align }) => align || 'left'};
    color: red;
`;
