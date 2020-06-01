import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import axios from 'axios';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import UserItems from '../components/User/users';
import UserPage from '../pages/user-page';
import Search from '../components/Search';
import About from '../pages/about';

const App = () => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);

    const searchUsers = async (search) => {
        setLoading(true);
        const githubUrl = `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        setUsers(res.data.items);
        setLoading(false);
    };

    const clearUsers = () => {
        setUsers([]);
        setLoading(false);
    };

    const showAlert = (msg, type) => {
        setAlert({ msg, type });
        setTimeout(() => setAlert(null), 5000);
    };

    // Get a single user
    const getUser = async (username) => {
        setLoading(true);
        const githubUrl = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        setUser(res.data);
        setLoading(false);
    };

    // Get user repos
    const getUserRepos = async (username) => {
        setLoading(true);
        const githubUrl = `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        setRepos(res.data);
        setLoading(false);
    };

    return (
        <Router>
            <Navbar title="GH-Finder" />
            <Alert alert={alert} />
            <Switch>
                <Route exact path="/">
                    <Search
                        searchUsers={searchUsers}
                        clearUsers={clearUsers}
                        showAlert={showAlert}
                        showClear={Boolean(users.length)}
                    />
                    <UserItems loading={loading} users={users} />
                </Route>
                <Route exact path="/about" component={About} />
                <Route
                    exact
                    path="/user/:login"
                    render={(props) => (
                        <UserPage
                            {...props}
                            getUser={getUser}
                            getUserRepos={getUserRepos}
                            user={user}
                            repos={repos}
                            loading={loading}
                        />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default App;
