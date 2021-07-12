import React from 'react';
import { StyledListItem } from './AutoCompleteItem.styled';

export const AutoCompleteItem = ({ name, onSelectItem, isHighlighted }) => {
    return (
        <StyledListItem onClick={onSelectItem} active={isHighlighted}>
            <p>{name}</p>
        </StyledListItem>
    );
};
