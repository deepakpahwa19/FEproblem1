import GlobalStyles from './styles/globalStyles';
import { Navbar } from './components/';
import { Footer } from './components/Footer/Footer';
import { AnchorView } from './views/CommonUI/Anchor';
import { MainSection } from './views/MainSection/MainSection';
// import { DestinationAutoComplete } from './components/AutoComplete/DestinationAutoComplete';

function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <MainSection></MainSection>
            <Footer justifyContent='center'>
                <AnchorView
                    href='https://www.geektrust.in/coding-problem/frontend/space'
                    anchorName='Coding problem - GeekTrust.in'
                />
            </Footer>
        </>
    );
}

export default App;
