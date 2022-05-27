import styled from 'styled-components';
import { FaMagento } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/globalStyles';

export const Nav = styled.nav`
    background: ${props => props.theme.colors.black};
    width: 100%;
    height: 5rem;
    font-size: ${props => props.theme.fontSizes.sm};
    position: sticky;
    top: 0;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

export const NavLogo = styled(Link)`
    color: ${props => props.theme.colors.powderWhite};
    justify-self: flex-start;
    cursor: pointer;
    text-decoration: none;
    font-size: ${props => props.theme.fontSizes.md};
    display: flex;
    align-items: center;
`;

export const NavIcon = styled(FaMagento)`
    margin-right: 0.5rem;
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    width: 20%;
    min-width: 120px;
`;

export const NavItem = styled.li`
    margin-left: ${props => props.theme.margin.sm};
`;
