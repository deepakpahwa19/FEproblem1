import React from 'react';
import PropTypes from 'prop-types';
import { StyledBackdrop } from './Backdrop.styled';

export const Backdrop = ({ show = true }) => {
    return show ? <StyledBackdrop /> : null;
};

Backdrop.propTypes = {
    show: PropTypes.bool
};
