import React from 'react';
import PropTypes from 'prop-types';
import { StyledAnchor } from './Anchor.styled';

export const AnchorView = React.memo(({ anchorName, href = '' }) => {
    return (
        <StyledAnchor href={href} target='_blank' rel='noreferrer'>
            {anchorName}
        </StyledAnchor>
    );
});

AnchorView.propTypes = {
    anchorName: PropTypes.string.isRequired,
    href: PropTypes.string
};
