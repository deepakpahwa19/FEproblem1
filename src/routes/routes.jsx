import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { ResultFindFalcone } from '../feature/FindFalcone';
import { FindFalconeFeature } from '../feature/FindFalcone';

export const Routes = React.memo(() => {
    return (
        <Switch>
            <Route path='/findFalcone' exact component={FindFalconeFeature} />
            <Route path='/findFalcone/result' exact component={ResultFindFalcone} />
            <Route path='*' render={() => <Redirect to='/findFalcone' />} />
        </Switch>
    );
});

export const RedirectToResult = () => {
    return <Redirect to='/findFalcone/result' />;
};
