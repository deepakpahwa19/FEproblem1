import React from 'react';
import { FooterView } from '../../views';

export const Footer = React.memo(({ children, justifyContent }) => {
    return <FooterView justifyContent={justifyContent}>{children}</FooterView>;
});
