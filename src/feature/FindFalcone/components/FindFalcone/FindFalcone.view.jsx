import React from 'react';
import PropTypes from 'prop-types';
import { JourneyCard } from '../JourneyCard/JourneyCard';
import { Button, ErrorMessage } from '../../../../components';
import { FlexContainer } from '../../../../styles/FlexContainer.styled';
import { listOfCards } from '../../config/findFalcon.config';
import { Shimmer } from '../../../../components/Shimmer/Shimmer';
import { RedirectToResult } from '../../../../routes/routes';

export const FindFalconeView = ({
    timeTaken,
    onClickFindFalconeHandler,
    errorMessage,
    falconeFound,
    isLoading,
    isValid
}) => {
    if (falconeFound) {
        return <RedirectToResult />;
    }
    if (isLoading) {
        return <Shimmer />;
    }

    return (
        <FlexContainer direction='column'>
            <h1>Finding Falcone!</h1>
            <h3>Select planets you want to search in:</h3>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <FlexContainer>
                {listOfCards.map((card, index) => (
                    <JourneyCard key={`journey-${index}`} index={index} isValid={isValid} />
                ))}
            </FlexContainer>
            <h4>Total Time: {timeTaken}</h4>
            <Button onClick={onClickFindFalconeHandler} variant='primary'>
                Find Falcone
            </Button>
        </FlexContainer>
    );
};

FindFalconeView.propTypes = {
    timeTaken: PropTypes.number.isRequired,
    onClickFindFalconeHandler: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    falconeFound: PropTypes.string,
    isLoading: PropTypes.bool,
    isValid: PropTypes.bool
};
