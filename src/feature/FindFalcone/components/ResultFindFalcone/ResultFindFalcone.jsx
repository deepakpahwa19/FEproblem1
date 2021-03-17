import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { FlexContainer, H1, H4 } from '../../../../views';
import { Button } from '../../../../views/CommonUI';
import { NavLink } from 'react-router-dom';
import { getResetFindFalconeAction, getResetJourneyAction } from '../../state/actions/actions/';

export const ResultFindFalcone = () => {
    const { planetName, timeTaken } = useSelector(state => state.findFalcone);
    const dispatch = useDispatch();

    const handleOnClick = () => {
        batch(() => {
            dispatch(getResetFindFalconeAction());
            dispatch(getResetJourneyAction());
        });
    };

    let content = null;
    if (!!planetName) {
        content = (
            <>
                <H4>Success! Congratulations on Finding Falcone. King Shan is mighty pleased.</H4>
                <H4>Time taken: {timeTaken}</H4>
                <H4>Planet found: {planetName}</H4>
            </>
        );
    } else {
        content = <H4>You've failed King Shan. Only GeekTrust can save you</H4>;
    }

    return (
        <FlexContainer direction='column'>
            <H1>Finding Falcone!</H1>
            <FlexContainer direction='column' margin='40px auto'>
                {content}
                <NavLink to='/findFalcone' style={{ margin: 'auto' }}>
                    <Button onClick={handleOnClick}>Start Again</Button>
                </NavLink>
            </FlexContainer>
        </FlexContainer>
    );
};
