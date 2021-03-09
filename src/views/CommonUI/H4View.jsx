import React from 'react';
import styled from 'styled-components';

export const H4View = React.memo(({ children }) => {
    return <H4>{children}</H4>;
});

const H4 = styled.h4`
    text-align: center;
    margin: 10px auto;
`;
