import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DestinationDropdown } from '../Destination/DestinationDropdown';
import { VehicleList } from '../Vehicle/VehicleList';
import { CardContainer } from './JourneyCard.styled';

export const JourneyCardView = ({ index, isJourneyNotValid }) => {
    return (
        <CardContainer isValid={!isJourneyNotValid}>
            <h4>Destination {index + 1}</h4>
            <DestinationDropdown name={`destination-${index}`} journeyIndex={index} />
            <VehicleList key={`vehicle-${index}`} name={`vehicle-${index}`} journeyIndex={index} />
        </CardContainer>
    );
};

JourneyCardView.propTypes = {
    index: PropTypes.number.isRequired,
    isJourneyNotValid: PropTypes.bool
};
