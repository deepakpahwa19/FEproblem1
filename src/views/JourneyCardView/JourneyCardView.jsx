import React from 'react';
import styled from 'styled-components';

export const JourneyCardView = React.memo(({ children, isNotValid }) => {
    return <CardContainer isNotValid={isNotValid}>{children}</CardContainer>;
});

const CardContainer = styled.div`
    flex-grow: 1;
    height: 250px;
    width: min(40vmax, 250px);
    border: ${({ isNotValid }) => (isNotValid ? '1px solid red' : '')};
    /* min-width: 200px; */
    max-width: 300px;
    padding: 1.5em;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 0px 0px 11px 0px #888888;
`;
