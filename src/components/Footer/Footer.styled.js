import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: #101522;
`;

export const StyledSection = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
`;
