import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { DestinationDD } from '../DestinationDD/DestinationDD';
import { VehicleList } from '../Vehicle/VehicleList';
import { H4, JourneyCardView } from '../../../../views';
import { useSelector } from 'react-redux';
import { getJourneyNameWithIndex } from '../../../../constants/commonConstants';

export const JourneyCard = React.memo(({ index, isValid }) => {
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(index)]);

    const isJourneyNotValid = useMemo(() => {
        return !isValid && (!(planet || {}).name || !(vehicle || {}).name);
    }, [planet, vehicle, isValid]);

    return (
        <JourneyCardView isValid={isJourneyNotValid}>
            <H4>Destination {index + 1}</H4>
            <DestinationDD name={`destination-${index}`} journeyIndex={index} />
            <VehicleList key={`vehicle-${index}`} name={`vehicle-${index}`} journeyIndex={index} />
        </JourneyCardView>
    );
});

JourneyCard.propTypes = {
    index: PropTypes.number
};
