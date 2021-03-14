import React from 'react';
import styled from 'styled-components';

export const FooterView = React.memo(({ children, justifyContent, alignItems }) => {
    return (
        <FooterUI>
            <Container justifyContent={justifyContent} alignItems={alignItems}>
                {children}
            </Container>
        </FooterUI>
    );
});

const FooterUI = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: #101522;
`;

const Container = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
`;
