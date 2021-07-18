import React from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';
import { FlexContainer } from '../../../../views';
import { Button } from '../../../../views';
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
                <NavLink to='/findFalcone' style={{ margin: 'auto' }}>
                    <Button onClick={handleOnClick}>Start Again</Button>
                </NavLink>
            </FlexContainer>
        </FlexContainer>
    );
};

ResultFindFalcone.propTypes = {};
