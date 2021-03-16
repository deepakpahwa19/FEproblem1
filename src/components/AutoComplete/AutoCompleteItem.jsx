import React from 'react';
import styled from 'styled-components';

export const AutoCompleteItem = ({ name, capital, region, flag, onSelectItem, isHighlighted }) => {
    return (
        <ListItem onClick={onSelectItem} active={isHighlighted}>
            <p>{name}</p>
        </ListItem>
    );
};

const ListItem = styled.li`
    cursor: pointer;
    margin: 0.2rem;
    list-style: none;

    background-color: ${({ active }) => (active ? '#e1e3e5' : '')};
    border-color: ${({ active }) => (active ? '#d3d5d7' : '')};

    & :hover {
        background-color: #e1e3e5;
        border-color: #d3d5d7;
    }
`;
