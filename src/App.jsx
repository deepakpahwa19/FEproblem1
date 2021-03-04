import './App.css';
import { FindFalconeFeature } from './feature/FindFalconeFeature';
import GlobalStyle from './styles/globalStyles';

function App() {
    return (
        <>
            <GlobalStyle />
            <div className='App'>
                <FindFalconeFeature />
            </div>
        </>
    );
}

export default App;
