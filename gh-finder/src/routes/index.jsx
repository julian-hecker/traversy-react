import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import axios from 'axios';

import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import UserItems from '../components/User/user-items';
import Search from '../components/Search';
import About from '../pages/About';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false,
            alert: null,
        };
    }

    searchUsers = async (search) => {
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

    render() {
        const { searchUsers, clearUsers, setAlert } = this;
        const { users, loading, alert } = this.state;
        return (
            <Router>
                <div className="app">
                    <Navbar title="GH-Finder" />
                    <div className="container">
                        <Alert alert={alert} />
                        <Switch>
                            <Route exact path="/">
                                <Search
                                    searchUsers={searchUsers}
                                    clearUsers={clearUsers}
                                    setAlert={setAlert}
                                    showClear={Boolean(users.length)}
                                />
                                <UserItems
                                    loading={loading}
                                    users={users}
                                />
                            </Route>
                            <Route
                                exact
                                path="/about"
                                component={About}
                            />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;