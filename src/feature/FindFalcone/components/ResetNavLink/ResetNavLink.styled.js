import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ResetLink = styled(NavLink)`
    text-decoration: none;
    color: ${props => props.color || props.theme.colors.powderWhite};
`;
