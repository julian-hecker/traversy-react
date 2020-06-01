import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import axios from 'axios';

import GithubState from '../context/github/GithubState';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import UserItems from '../components/User/users';
import UserPage from '../pages/user-page';
import Search from '../components/Search';
import About from '../pages/about';

const App = () => {
    const [repos, setRepos] = useState([]);
    const [alert, setAlert] = useState(null);



    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 5000);
    };


    // Get user repos
    const getUserRepos = async (username) => {
        const githubUrl = `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        setRepos(res.data);
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
                        render={(props) => (
                            <UserPage
                                {...props}
                                getUserRepos={getUserRepos}
                                repos={repos}
                            />
                        )}
                    />
                </Switch>
            </Router>
        </GithubState>
    );
};

export default App;
