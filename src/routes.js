import React from 'react';
import { Switch, Route } from 'react-router-dom';

// ===================================
//  Page Components
// ===================================
import Page from './components/page';
import PageTwo from './components/PageTwo';
import Form from './components/Form';

const Routes = () => {
    return (
        <Switch>
            {/*=========================================
            ||---@Front End Route
            =========================================*/}
                <Route exact path="/" component={Page} />
                <Route exact path="/pagetwo" component={PageTwo} />
                <Route exact path="/form" component={Form} />
        </Switch>
    );
};

export default Routes;