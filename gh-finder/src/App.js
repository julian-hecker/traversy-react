import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserItems from './components/UserItems';

class App extends Component {
    render() {
        return (
            <div className="app">
                <Navbar title="GH-Finder" />
                <UserItems />
            </div>
        );
    }
}

export default App;
