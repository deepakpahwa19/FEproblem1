import React, { useState, useEffect } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { ResetNavLink } from '../../feature/FindFalcone/components/ResetNavLink/ResetNavLink';
import { Nav, NavbarContainer, NavIcon, NavLogo, MobileIcon, NavMenu, NavItem } from './Navbar.styled';

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
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        Find Falcone
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <ResetNavLink />
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

Navbar.propTypes = {};
