import React from 'react';
import PropTypes from 'prop-types';
import { JourneyCard } from '../';
import { RedirectToResult } from '../../../../routes/routes';
import { Spinner, Button, ErrorMessage, FlexContainer, H4, H1, H3 } from '../../../../views';
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
            <H1>Finding Falcone!</H1>
            <H3>Select planets you want to search in:</H3>
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            <FlexContainer>
                {listOfCards.map((card, index) => (
                    <JourneyCard key={`journey-${index}`} index={index} isValid={isValid} />
                ))}
            </FlexContainer>
            <H4>Total Time: {timeTaken}</H4>
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
