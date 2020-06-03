import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import SearchPage from '../pages/search-page';
import UserPage from '../pages/user-page';
// import About from '../pages/about';
import NotFound from '../pages/not-found';

import GithubState from '../context/github/GithubState';
import AlertState from '../context/alert/AlertState';

const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <Navbar title="GH-Finder" />
                    <Alert />
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={SearchPage}
                        />
                        {/* <Route 
                            exact
                            path="/about"
                            component={About}
                        /> */}
                        <Route
                            exact
                            path="/user/:login"
                            component={UserPage}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
