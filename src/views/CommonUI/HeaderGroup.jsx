import React from 'react';
import styled from 'styled-components';

export const H4 = React.memo(({ children, align }) => {
    return <H4UI align={align}>{children}</H4UI>;
});

export const H1 = React.memo(({ children, align }) => {
    return <H1UI align={align}>{children}</H1UI>;
});

export const H3 = React.memo(({ children, align }) => {
    return <H3UI align={align}>{children}</H3UI>;
});

const HGroup = styled.h4`
    text-align: ${({ align }) => align || 'center'};
    margin: ${({ margin }) => margin || '10px auto'};
    font-weight: 700;
`;

const H1UI = styled(HGroup)`
    font-size: 3.2rem;
`;

const H3UI = styled(HGroup)`
    font-size: 1.8rem;
    font-weight: 400;
`;

const H4UI = styled(HGroup)`
    font-size: 1.6rem;
`;
