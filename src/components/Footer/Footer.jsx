import React from 'react';
import { FooterView } from './Footer.view';
import PropTypes from 'prop-types';

export const Footer = React.memo(({ children, justifyContent }) => {
    return <FooterView justifyContent={justifyContent}>{children}</FooterView>;
});

Footer.propTypes = {
    justifyContent: PropTypes.string
};
