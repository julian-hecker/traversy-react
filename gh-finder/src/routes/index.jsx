import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import UserItems from '../components/User/users';
import UserPage from '../pages/user-page';
import Search from '../components/Search';
import About from '../pages/about';

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
                        <Route exact path="/">
                            <Search />
                            <UserItems />
                        </Route>
                        <Route
                            exact
                            path="/about"
                            component={About}
                        />
                        <Route
                            exact
                            path="/user/:login"
                            component={UserPage}
                        />
                    </Switch>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
