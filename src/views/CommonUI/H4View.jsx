import React from 'react';
import styled from 'styled-components';

export const H4 = React.memo(({ children }) => {
    return <H4UI>{children}</H4UI>;
});

const H4UI = styled.h4`
    text-align: center;
    margin: 10px auto;
`;
