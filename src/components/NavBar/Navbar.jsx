import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavIcon,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavItemBtn
} from '../../views/NavBarView/NavbarView';
import { Button } from '../../styles/globalStyles';

export const Navbar = () => {
    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);

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
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <NavIcon />
                        GeekTrust
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />}</MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/products'>Products</NavLinks>
                        </NavItem>
                        {/* <NavItemBtn>
                            {button ? (
                                <NavBtnLink to='/sign-up'>
                                    <Button primary>SIGN UP</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/sign-up'>
                                    <Button fontBig primary>
                                        SIGN UP
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn> */}
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};
