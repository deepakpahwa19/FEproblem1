import GlobalStyles from './styles/globalStyles';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <HomePage />
            </ThemeProvider>
        </>
    );
}

export default App;
