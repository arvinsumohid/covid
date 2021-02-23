import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from '../../pages/Homepage'
import Country from '../../pages/Country'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route key="country" path="/:country" component={Country} />
                <Route key="homepage" path="/" component={Homepage} />
            </Switch>
        </Router>
    )
}

export default Routing