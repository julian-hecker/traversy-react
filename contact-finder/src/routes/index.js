import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import AuthState from '../context/auth/State';
import ContactState from '../context/State';
import Navbar from '../components/layout/Navbar';
import Home from './Home';
import NotFound from './notfound';

const Routes = (props) => {
    return (
        <AuthState>
            <ContactState>
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
            </ContactState>
        </AuthState>
    );
};

export default Routes;
