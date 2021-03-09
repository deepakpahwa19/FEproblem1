import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { DestinationDD } from '../DestinationDD/DestinationDD';
import { VehicleList } from '../Vehicle/VehicleList';
import { H4View, JourneyCardView } from '../../../views';

export const JourneyCard = React.memo(({ index }) => {
    const [planetDistance, setPlanetDistance] = useState(0);

    const updatePlanetDistance = useCallback(distance => {
        setPlanetDistance(distance);
    }, []);

    return (
        <JourneyCardView>
            <H4View>Destination {index + 1}</H4View>
            <DestinationDD
                name={`destination-${index}`}
                updatePlanetDistance={updatePlanetDistance}
                journeyIndex={index}
            />
            {planetDistance > 0 && (
                <VehicleList
                    key={`vehicle-${index}`}
                    planetDistance={planetDistance}
                    name={`vehicle-${index}`}
                    journeyIndex={index}
                />
            )}
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number
};
