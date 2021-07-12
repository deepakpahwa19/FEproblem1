import React from 'react';
import PropTypes from 'prop-types';
import { StyledFooter, StyledSection } from './Footer.styled';

export const FooterView = React.memo(({ children, justifyContent, alignItems }) => {
    return (
        <StyledFooter>
            <StyledSection justifyContent={justifyContent} alignItems={alignItems}>
                {children}
            </StyledSection>
        </StyledFooter>
    );
});

FooterView.propTypes = {
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string
};
