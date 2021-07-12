import styled from 'styled-components';

export const StyledButton = styled.button`
    border-radius: 4px;
    background: ${({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    margin: auto;

    &:hover {
        transition: all 0.3s ease-out;
        /* background: #fff; */
        background: ${({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
    }
`;