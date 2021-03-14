import './App.css';
import { Routes } from './routes/routes';
import GlobalStyles from './styles/globalStyles';
import { Navbar } from './components/';

function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Routes />
        </>
    );
}

export default App;
