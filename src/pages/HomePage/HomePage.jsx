import { Navbar, Footer } from '../../components';
import { AnchorView, MainSectionStyle } from '../../views';
import { Routes } from '../../routes/routes';

export const HomePage = () => {
    return (
        <>
            <Navbar />
            <MainSectionStyle>
                <Routes />
            </MainSectionStyle>
            <Footer justifyContent='center'>
                <AnchorView href='' anchorName='Coding problem - ManMade' />
            </Footer>
        </>
    );
};
