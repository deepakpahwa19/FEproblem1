import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const RequiredElement = React.memo(({ message, align }) => {
    return <RequiredElementUI align={align}>{message || '*required'}</RequiredElementUI>;
});
RequiredElement.propTypes = {
    message: PropTypes.string,
    align: PropTypes.string
};

const RequiredElementUI = styled.p`
    font-size: 1rem;
    text-align: ${({ align }) => align || 'left'};
    color: red;
`;
