import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FlexContainer } from '../../../../styles/FlexContainer.styled';
import { Button } from '../../../../components';
import { NavLink } from 'react-router-dom';
import { getResetFindFalconeAction, getResetJourneyAction } from '../../state/actions/actions/';
import { ResetNavLink } from '../ResetNavLink/ResetNavLink';

export const ResultFindFalcone = () => {
    const { planetName, timeTaken } = useSelector(state => state.findFalcone);

    let content = null;
    if (!!planetName) {
        content = (
            <>
                <h4>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</h4>
                <h4>Time taken: {timeTaken}</h4>
                <h4>Planet found: {planetName}</h4>
            </>
        );
    } else {
        content = <h4>You've failed King Shan. Only God can save you</h4>;
    }

    return (
        <FlexContainer direction='column'>
            <h1>Finding Falcone!</h1>
            <FlexContainer direction='column' margin='40px auto'>
                {content}
                <ResetNavLink name='Start Again' />
            </FlexContainer>
        </FlexContainer>
    );
};

ResultFindFalcone.propTypes = {};
