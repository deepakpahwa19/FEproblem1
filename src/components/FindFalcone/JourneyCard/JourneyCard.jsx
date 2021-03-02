import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { DestinationDD } from '../DestinationDD/DestinationDD';
import { VehicleList } from '../Vehicle/VehicleList';
import { JourneyCardView } from '../../../views';

export const JourneyCard = React.memo(({ index }) => {
    const [planetDistance, setPlanetDistance] = useState(0);

    const updatePlanetDistance = useCallback(distance => {
        setPlanetDistance(distance);
    }, []);

    return (
        <JourneyCardView>
            <h4>Destination {index + 1}</h4>
            <DestinationDD name={`destination-${index}`} updatePlanetDistance={updatePlanetDistance} />
            {planetDistance > 0 && (
                <VehicleList
                    key={`vehicle-${index}`}
                    planetDistance={planetDistance}
                    name={`vehicle-${index}`}
                    // handleSelection={handleSelectedVehicle}
                />
            )}
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number
};
