import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import Login from '../../pages/Login';
// import Register from '../../pages/Register';
// import Account from '../../pages/Account';
// import Homepage from '../../pages/Student/Homepage';
import Homepage from '../../pages/Homepage'

const RoutingStudent = () => {
    return (
        <Router>
            <Switch>
                <Route key="home" path="/" component={Homepage} />
                <Route key="home" path="/:country" component={Homepage} />
            </Switch>
        </Router>
    )
}

export default RoutingStudent