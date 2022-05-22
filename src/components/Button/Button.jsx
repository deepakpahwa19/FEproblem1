import React from 'react';

import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';

export const Button = React.memo(({ children, onClick, variant }) => {
    return (
        <StyledButton onClick={onClick} variant={variant}>
            {children}
        </StyledButton>
    );
});

Button.propTypes = {
    onClick: PropTypes.func,
    variant: PropTypes.string
};
