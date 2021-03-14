import React, { useCallback } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { FlexContainer, H1, H4 } from '../../views';
import { Button } from '../../views/CommonUI';
import { NavLink } from 'react-router-dom';
import { getResetFindFalconeAction } from '../../redux/actions/actions';
import { getResetJourneyAction } from '../../redux/actions/actions/journeyActions';

export const ResultPage = React.memo(() => {
    const { planetName, timeTaken } = useSelector(state => state.findFalcone);
    const dispatch = useDispatch();

    const handleOnClick = useCallback(() => {
        batch(() => {
            dispatch(getResetFindFalconeAction());
            dispatch(getResetJourneyAction());
        });
    }, [dispatch]);

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
                <NavLink to='/' style={{ margin: 'auto' }}>
                    <Button onClick={handleOnClick}>Start Again</Button>
                </NavLink>
            </FlexContainer>
        </FlexContainer>
    );
});
