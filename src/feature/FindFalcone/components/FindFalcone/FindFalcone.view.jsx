import React from 'react';
import PropTypes from 'prop-types';
import { JourneyCard } from '../';
import { RedirectToResult } from '../../../../routes/routes';
import { Spinner, Button, ErrorMessage, FlexContainer } from '../../../../views';
import { listOfCards } from '../../config/findFalconConfig';

export const FindFalconeView = ({
    timeTaken,
    handleFindFalconeClick,
    errorMessage,
    falconeFound,
    isLoading,
    isValid
}) => {
    if (falconeFound) {
        return <RedirectToResult />;
    }

    if (isLoading) {
        return <Spinner />;
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
            <Button onClick={handleFindFalconeClick}>Find Falcone</Button>
        </FlexContainer>
    );
};

FindFalconeView.propTypes = {
    timeTaken: PropTypes.number,
    handleFindFalconeClick: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    falconeFound: PropTypes.bool,
    isLoading: PropTypes.bool,
    isValid: PropTypes.bool
};
