import React from 'react';
import { Navbar } from '../../components/NavBar/Navbar';
import { FindFalconeFeature } from '../../feature/FindFalconeFeature';

export const HomePage = React.memo(() => {
    return (
        <>
            <Navbar />
            <FindFalconeFeature />
        </>
    );
});
