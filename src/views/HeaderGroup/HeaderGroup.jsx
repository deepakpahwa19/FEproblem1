import React from 'react';
import styled from 'styled-components';

export const H4 = React.memo(({ children }) => {
    return <H4UI>{children}</H4UI>;
});

export const H1 = React.memo(({ children }) => {
    return <H1UI>{children}</H1UI>;
});

export const H3 = React.memo(({ children }) => {
    return <H3UI>{children}</H3UI>;
});

const H1UI = styled.h1``;

const H3UI = styled.h3``;

const H4UI = styled.h4``;
