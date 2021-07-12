import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import { destinations, journey, vehicles } from './testData';

const mockStore = configureStore([]);
const defaultStore = mockStore({
    journey: {
        journey_0: {
            planet: {
                name: 'Donlon',
                distance: 100
            },
            vehicle: {
                name: 'Space ship',
                total_no: 2,
                max_distance: 600,
                speed: 10
            }
        }
    },
    vehicles: vehicles,
    destinations: destinations
});

export const withStore = (WrappedComponent, store = defaultStore) => {
    return <Provider store={store}>{WrappedComponent}</Provider>;
};
