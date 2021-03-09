import React from 'react';
import PropTypes from 'prop-types';
import { DestinationDD } from '../DestinationDD/DestinationDD';
import { VehicleList } from '../Vehicle/VehicleList';
import { H4, JourneyCardView } from '../../../views';

export const JourneyCard = React.memo(({ index }) => {
    return (
        <JourneyCardView>
            <H4>Destination {index + 1}</H4>
            <DestinationDD name={`destination-${index}`} journeyIndex={index} />
            <VehicleList key={`vehicle-${index}`} name={`vehicle-${index}`} journeyIndex={index} />
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number
};
