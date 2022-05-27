import React from 'react';
import PropTypes from 'prop-types';
import { StyledListItem } from './AutoCompleteItem.styled';

export const AutoCompleteItem = ({ name, onClickItemHandler = () => {}, isHighlighted = false }) => {
    return (
        <StyledListItem onClick={onClickItemHandler} active={isHighlighted}>
            <p>{name}</p>
        </StyledListItem>
    );
};
AutoCompleteItem.propTypes = {
    name: PropTypes.string.isRequired,
    onClickItemHandler: PropTypes.func,
    isHighlighted: PropTypes.bool
};
