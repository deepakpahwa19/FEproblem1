import GlobalStyles from './styles/globalStyles';
import { HomePage } from './pages/HomePage/HomePage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';

function App() {
    return (
        <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
                <ErrorBoundary>
                    <HomePage />
                </ErrorBoundary>
            </ThemeProvider>
        </>
    );
}

export default App;
