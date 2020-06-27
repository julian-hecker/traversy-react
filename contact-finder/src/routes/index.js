import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from './Home';
import NotFound from './notfound';

const Routes = (props) => {
    return (
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
    );
};

export default Routes;
