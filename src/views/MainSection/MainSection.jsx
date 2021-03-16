import React from 'react';
import styled from 'styled-components';
import { Routes } from '../../routes/routes';

export const MainSection = React.memo(({ children }) => {
    return (
        <MainSectionUI>
            <Routes />
        </MainSectionUI>
    );
});

const MainSectionUI = styled.main`
    height: calc(100vh - 10rem);
    width: 100vw;
    overflow-y: auto;
    padding: 1rem;
`;
