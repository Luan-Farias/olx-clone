import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import NotFound from './pages/NotFound';

const Routes = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signin" component={SignIn} />
            <Route component={NotFound} />
        </Switch>
);

export default Routes;