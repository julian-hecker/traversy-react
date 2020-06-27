import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import State from '../context/State';
import Navbar from '../components/Navbar';
import Home from './Home';
import NotFound from './notfound';

const Routes = (props) => {
    return (
        <State>
            <Router>
                <Navbar
                    links={[
                        { url: '/', text: 'Home' },
                        { url: '/about', text: 'About' },
                        { url: '/reeee', text: 'Reeee' },
                    ]}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </State>
    );
};

export default Routes;
