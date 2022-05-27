import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Navbar, Footer } from '../../components';
import { AnchorView, MainSectionStyle } from '../../components';
import { NavItem } from '../../components';
import { Routes } from '../../routes/routes';

export const HomePage = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Navbar>
                <NavItem></NavItem>
            </Navbar>
            <MainSectionStyle>
                <Routes />
            </MainSectionStyle>
            <Footer justifyContent='center'>
                <AnchorView href='' anchorName='Coding problem - GeekTrust' />
            </Footer>
        </>
    );
};
