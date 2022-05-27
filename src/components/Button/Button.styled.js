import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 4px;
    background: ${({ variant, theme }) => (variant === 'primary' ? theme.colors.primary : 'gray')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: ${props => props.theme.colors.powderWhite};
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    margin: 2rem auto;

    &:hover {
        transition: all 0.3s ease-out;
    }
`;
