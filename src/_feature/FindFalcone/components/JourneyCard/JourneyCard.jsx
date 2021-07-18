import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { JourneyCardView } from './JourneyCard.view';
import { useSelector } from 'react-redux';
import { getJourneyNameWithIndex } from '../../constants/constants';

export const JourneyCard = React.memo(({ index, isValid }) => {
    const { planet, vehicle } = useSelector(state => state.journey[getJourneyNameWithIndex(index)]) || {};

    const isJourneyNotValid = useMemo(() => {
        return (!isValid && !planet?.name) || !vehicle?.name;
    }, [planet, vehicle, isValid]);

    return <JourneyCardView isJourneyNotValid={isJourneyNotValid} index={index} />;
});

JourneyCard.propTypes = {
    index: PropTypes.number,
    isValid: PropTypes.bool
};
