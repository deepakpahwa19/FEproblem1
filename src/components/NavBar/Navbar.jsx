import React, { useState, useEffect } from 'react';
import { ResetNavLink } from '../../feature/FindFalcone/components/ResetNavLink/ResetNavLink';
import { AnchorView } from '../Anchor/Anchor.view';
import { Nav, NavbarContainer, NavIcon, NavLogo, NavMenu, NavItem } from './Navbar.styled';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const [, setButton] = useState(true);

    const handleClick = () => setClick(!click);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    useEffect(() => {
        showButton();
        window.addEventListener('resize', showButton);
        return () => window.removeEventListener('resize', showButton);
    }, []);

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <NavIcon />
                    Find Falcone
                </NavLogo>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <ResetNavLink />
                    </NavItem>
                    <NavItem>
                        <AnchorView anchorName='GeekTrust' href='https://www.geektrust.com/coding/detailed/space' />
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

Navbar.propTypes = {};
