import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS,
} from '../types';

let clientId;
let clientSecret;

if (process.env.NODE_ENV !== 'production') {
    clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
    clientId = process.env.GITHUB_CLIENT_ID;
    clientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Users
    const searchUsers = async (search) => {
        setLoading(true);
        const githubUrl = `https://api.github.com/search/users?q=${search}&client_id=${clientId}&client_secret=${clientSecret}`;
        const res = await axios.get(githubUrl);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items,
        });
        // setUsers(res.data.items);
        // setLoading(false);
    };

    // Get User
    const getUser = async (username) => {
        setLoading();
        const githubUrl = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;
        const res = await axios.get(githubUrl);
        dispatch({
            type: GET_USER,
            payload: res.data,
        });
    };

    // Get Repos
    const getUserRepos = async (username) => {
        const githubUrl = `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${clientId}&client_secret=${clientSecret}`;
        const res = await axios.get(githubUrl);
        dispatch({
            type: GET_REPOS,
            payload: res.data,
        });
    };

    // Clear Users
    const clearUsers = () =>
        dispatch({
            type: CLEAR_USERS,
        });

    // Set Loading
    const setLoading = () => dispatch({ type: SET_LOADING });

    return (
        <GithubContext.Provider
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                searchUsers: searchUsers,
                clearUsers: clearUsers,
                getUser: getUser,
                getUserRepos: getUserRepos,
            }}
        >
            {props.children}
        </GithubContext.Provider>
    );
};

export default GithubState;
