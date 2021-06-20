import React from 'react';
import {Router, Route, Redirect, hashHistory} from 'react-router';
import Dashboard from '../dashboard2/Dashboard2';
import BillingCycle from '../billingCycle/BillingCycle';

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycles" component={BillingCycle}/>
        <Redirect from="*" to="/"/>
    </Router>
)