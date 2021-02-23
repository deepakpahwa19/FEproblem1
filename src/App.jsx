import { useEffect } from 'react';
import { batch, useDispatch } from 'react-redux';
import './App.css';
import { DestinationCard } from './components/DestinationCard/DestinationCard';
import { getDestinationsAction } from './redux/actions/actions/destinationActions';
import { getVehiclesAction } from './redux/actions/actions/vehicleActions';
import GlobalStyle from './styles/globalStyles';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('dispatching destinations...');
        batch(() => {
            dispatch(getDestinationsAction());
            dispatch(getVehiclesAction());
        });
    }, [dispatch]);
    return (
        <>
            <GlobalStyle />
            <div className='App'>
                <DestinationCard vehicles={['car', 'bike', 'scooty']} />
            </div>
        </>
    );
}

export default App;
