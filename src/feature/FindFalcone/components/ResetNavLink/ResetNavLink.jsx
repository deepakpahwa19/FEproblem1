import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { ResetLink } from './ResetNavLink.styled';
import { getResetFindFalconeAction, getResetJourneyAction } from '../../state/actions/actions';
import { Button } from '../../../../components';

export const ResetNavLink = ({ buttonName }) => {
    const dispatch = useDispatch();

    const onClickResetHandler = useCallback(() => {
        dispatch(getResetFindFalconeAction());
        dispatch(getResetJourneyAction());
    }, [dispatch]);

    return (
        <ResetLink to='/findFalcone'>
            {buttonName ? (
                <Button onClick={onClickResetHandler}>{buttonName}</Button>
            ) : (
                <div onClick={onClickResetHandler}>Reset</div>
            )}
        </ResetLink>
    );
};
