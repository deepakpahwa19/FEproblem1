import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages';
import { ResultPage } from '../pages/ResultPage/ResultPage';

export const Routes = React.memo(() => {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/result' component={ResultPage} />
        </Switch>
    );
});

export const RedirectToResult = () => {
    return <Redirect to='/result' />;
};

export const RedirectToHomePage = () => {
    return <Redirect to='/' />;
};
