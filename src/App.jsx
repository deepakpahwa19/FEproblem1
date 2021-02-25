import { useDispatch } from 'react-redux';
import './App.css';
import { FindFalconeFeature } from './containers/FindFalconeFeature';
import GlobalStyle from './styles/globalStyles';

function App() {
    const dispatch = useDispatch();

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
