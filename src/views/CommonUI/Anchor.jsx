import React from 'react';
import styled from 'styled-components';

export const AnchorView = React.memo(({ anchorName, href }) => {
    return (
        <AnchorUI href={href} target='_blank' rel='noreferrer'>
            {anchorName}
        </AnchorUI>
    );
});

const AnchorUI = styled.a`
    color: #fff;
    text-decoration: none;
`;
