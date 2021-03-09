import React from 'react';

import styled from 'styled-components';
// import { Button } from '../../styles/globalStyles';

export const ButtonView = React.memo(({ children, onClick }) => {
    return <Button onClick={onClick}>{children}</Button>;
});

export const Button = styled.button`
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
