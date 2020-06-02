import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import GithubState from '../context/github/GithubState';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import UserItems from '../components/User/users';
import UserPage from '../pages/user-page';
import Search from '../components/Search';
import About from '../pages/about';

const App = () => {
    const [alert, setAlert] = useState(null);


    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 5000);
    };


    return (
        <GithubState>
            <Router>
                <Navbar title="GH-Finder" />
                <Alert alert={alert} />
                <Switch>
                    <Route exact path="/">
                        <Search
                            showAlert={showAlert}
                        />
                        <UserItems />
                    </Route>
                    <Route exact path="/about" component={About} />
                    <Route
                        exact
                        path="/user/:login"
                        component={UserPage}
                    />
                </Switch>
            </Router>
        </GithubState>
    );
};

export default App;
