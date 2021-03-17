import React from 'react';
import { FooterView } from '../../views';
import PropTypes from 'prop-types';

export const Footer = React.memo(({ children, justifyContent }) => {
    return <FooterView justifyContent={justifyContent}>{children}</FooterView>;
});

Footer.propTypes = {
    justifyContent: PropTypes.string
};
