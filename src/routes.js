import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const Routes = () => (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={() => <h1>Error 404 - Page not found</h1>} />
        </Switch>
);

export default Routes;