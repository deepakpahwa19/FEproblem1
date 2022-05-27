import styled from 'styled-components';

export const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    left: 0;
    height: 5rem;
    width: 100%;
    background-color: ${props => props.theme.colors.black};
`;

export const StyledSection = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: ${({ justifyContent }) => (justifyContent ? justifyContent : 'space-between')};
    align-items: ${({ alignItems }) => (alignItems ? alignItems : 'center')};
`;
