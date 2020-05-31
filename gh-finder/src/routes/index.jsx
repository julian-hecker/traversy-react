import React, { Component } from 'react';
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

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            user: {},
            repos: [],
            loading: false,
            alert: null,
        };
    }

    searchUsers = async (search) => {
        this.setState({ loading: true });
        const githubUrl = `https://api.github.com/search/users?q=${search}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        this.setState({ users: res.data.items, loading: false });
    };

    clearUsers = () => this.setState({ users: [], loading: false });

    setAlert = (msg, type) => {
        this.setState({ alert: { msg, type } });
        // remove alert
        setTimeout(() => this.setState({ alert: null }), 5000);
    };

    // Get a single user
    getUser = async (username) => {
        this.setState({ loading: true });
        const githubUrl = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        this.setState({ user: res.data, loading: false });
    };

    // Get user repos
    getUserRepos = async (username) => {
        const githubUrl = `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
        const res = await axios.get(githubUrl);
        this.setState({ repos: res.data });
    };

    render() {
        const { searchUsers, clearUsers, setAlert } = this;
        const { user, users, repos, loading, alert } = this.state;
        return (
            <Router>
                <Navbar title="GH-Finder" />
                <Alert alert={alert} />
                <Switch>
                    <Route exact path="/">
                        <Search
                            searchUsers={searchUsers}
                            clearUsers={clearUsers}
                            setAlert={setAlert}
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
                                getUser={this.getUser}
                                getUserRepos={this.getUserRepos}
                                user={user}
                                repos={repos}
                                loading={loading}
                            />
                        )}
                    />
                </Switch>
            </Router>
        );
    }
}

export default App;
