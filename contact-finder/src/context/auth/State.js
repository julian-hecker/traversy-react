import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import Context from './context';
import reducer from './reducer';
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
} from '../types';

const AuthState = (props) => {
    // initial state
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        user: null,
        loading: true,
        error: null,
    };

    // usereducer hook
    const [state, dispatch] = useReducer(reducer, initialState);

    // actions
    // load user
    // register user
    // login user
    // logout user
    // clear errors



    return (
        <Context.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,

            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default AuthState;
