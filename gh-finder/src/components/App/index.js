import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar';
import UserItems from '../UserItems';
import Search from '../Search';
import axios from 'axios';
import PropTypes from 'prop-types'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loading: false,
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
        this.setState({users: res.data.items, loading: false})
    };

    render() {
        return (
            <div className="app">
                <Navbar title="GH-Finder" />
                <Search searchUsers={this.searchUsers} />
                <UserItems
                    loading={this.state.loading}
                    users={this.state.users}
                />
            </div>
        );
    }
}

export default App;
