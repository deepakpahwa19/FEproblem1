import React from 'react';
import styled from 'styled-components';

export const JourneyCardView = React.memo(({ children }) => {
    return <CardContainer>{children}</CardContainer>;
});

const CardContainer = styled.form`
    height: 200px;
    width: 150px;
    min-width: 150px;
    padding: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    box-shadow: 0px 0px 11px 0px #888888;
`;
