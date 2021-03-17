import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const AnchorView = React.memo(({ anchorName, href }) => {
    return (
        <AnchorUI href={href} target='_blank' rel='noreferrer'>
            {anchorName}
        </AnchorUI>
    );
});

AnchorView.propTypes = {
    anchorName: PropTypes.string,
    href: PropTypes.string
};

const AnchorUI = styled.a`
    color: #fff;
    text-decoration: none;
`;
