import React, { useState } from 'react';
import { destinations } from '../../ignore/PlanetsAPIResponse';
import { AutoComplete } from './AutoComplete';

export const DestinationAutoComplete = React.memo(() => {
    const [selectedDestination, setSelectedDestination] = useState('');

    console.log('selectedDestination =>', selectedDestination);

    return <AutoComplete data={destinations} onSelect={selected => setSelectedDestination(selected)} />;
});
