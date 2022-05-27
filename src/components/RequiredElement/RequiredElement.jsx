import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const RequiredElement = React.memo(({ message = '*required', align = 'left' }) => {
    return <RequiredElementUI align={align}>{message}</RequiredElementUI>;
});

RequiredElement.propTypes = {
    message: PropTypes.string,
    align: PropTypes.string
};

const RequiredElementUI = styled.p`
    font-size: 1rem;
    text-align: ${({ align }) => align};
    color: ${props => props.theme.colors.red};
`;
