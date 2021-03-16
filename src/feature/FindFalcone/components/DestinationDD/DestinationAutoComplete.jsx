import React, { useState } from 'react';
import { destinations } from '../../../../ignore/PlanetsAPIResponse';
import { AutoComplete } from '../../../../components';

export const DestinationAutoComplete = () => {
    const [selectedDestination, setSelectedDestination] = useState('');

    console.log('selectedDestination =>', selectedDestination);

    return <AutoComplete data={destinations} onSelect={selected => setSelectedDestination(selected)} />;
};
