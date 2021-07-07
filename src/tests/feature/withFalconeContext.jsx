import React from 'react';

import { FindFalconeContext } from '../../feature/FindFalcone/FindFalconeFeature';
import { destinations, vehicles } from './testData';

const contextData = {
    listOfDestination: destinations.map(dest => ({ ...dest })),
    updateDestinations: jest.fn(),
    destinations: [],
    listOfVehicle: vehicles.map(vehi => ({ ...vehi })),
    updateVehicles: jest.fn(),
    isValid: false
};

export const withContext = WrappedComponent => {
    return <FindFalconeContext.Provider value={contextData}>{WrappedComponent}</FindFalconeContext.Provider>;
};
