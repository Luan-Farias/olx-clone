import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route path="*" component={() => <h1>Error 404 - Page not found</h1>} />
        </Switch>
    </BrowserRouter>
);

export default Routes;