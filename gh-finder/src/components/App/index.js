import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import UserItems from '../UserItems';
import Search from '../Search';
import axios from 'axios';
import Alert from '../Alert';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false,
            alert: null,
        };
    }

    // async componentDidMount() {
    //     this.setState({ loading: true });
    //     const githubUrl = `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    //     const res = await axios.get(githubUrl);
    //     this.setState({ users: res.data, loading: false });
    // }

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
            <div className="app">
                <Navbar title="GH-Finder" />
                <div className="container">
                    <Alert alert={alert} />
                    <Search
                        searchUsers={searchUsers}
                        clearUsers={clearUsers}
                        setAlert={setAlert}
                        showClear={Boolean(users.length)}
                    />
                    <UserItems loading={loading} users={users} />
                </div>
            </div>
        );
    }
}

export default App;
