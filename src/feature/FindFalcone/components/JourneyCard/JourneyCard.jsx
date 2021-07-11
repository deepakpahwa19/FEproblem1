import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DestinationDropdown } from '../Destination/DestinationDropdown';
import { VehicleList } from '../Vehicle/VehicleList';
import { JourneyCardView } from '../../../../views';
import { useSelector } from 'react-redux';
import { getJourneyNameWithIndex } from '../../constants/constants';

export const JourneyCard = React.memo(({ index, isValid }) => {
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(index)]) || {};

    const isJourneyNotValid = useMemo(() => {
        return !isValid && (!(planet || {}).name || !(vehicle || {}).name);
    }, [planet, vehicle, isValid]);

    return (
        <JourneyCardView isValid={!isJourneyNotValid}>
            <h4>Destination {index + 1}</h4>
            <DestinationDropdown name={`destination-${index}`} journeyIndex={index} />
            <VehicleList key={`vehicle-${index}`} name={`vehicle-${index}`} journeyIndex={index} />
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number,
    isValid: PropTypes.bool
};
