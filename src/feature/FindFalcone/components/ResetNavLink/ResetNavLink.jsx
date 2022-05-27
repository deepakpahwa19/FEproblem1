import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { ResetLink } from './ResetNavLink.styled';
import { getResetFindFalconeAction, getResetJourneyAction } from '../../state/actions/actions';
import { Button } from '../../../../components';

export const ResetNavLink = ({ name }) => {
    const dispatch = useDispatch();

    const onClickResetHandler = useCallback(() => {
        dispatch(getResetFindFalconeAction());
        dispatch(getResetJourneyAction());
    }, [dispatch]);

    return (
        <ResetLink to='/findFalcone'>
            {name ? (
                <Button onClick={onClickResetHandler}>{name}</Button>
            ) : (
                <div onClick={onClickResetHandler}>Reset</div>
            )}
        </ResetLink>
    );
};

ResetNavLink.propTypes = {
    name: PropTypes.string
};
