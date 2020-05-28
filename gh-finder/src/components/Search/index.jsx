import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Search extends Component {
    state = {
        search: '',
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUser: PropTypes.func.isRequired,
        setAlert: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    };

    onChange = (ev) => {
        // // instead of setting state for each individual field
        // this.setState({ [ev.target.name]: ev.target.value });
        this.setState({ search: [ev.target.value] });
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        if (!this.state.search) {
            this.props.setAlert('enter something plz', 'light')
        }
        this.props.searchUsers(this.state.search);
    };

    render() {
        const { showClear, clearUsers } = this.props;
        return (
            <>
                <form className="form" onSubmit={this.onSubmit}>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search for a user..."
                        value={this.state.search}
                        onChange={this.onChange}
                    />
                    <input type="submit" value="Go" />
                </form>
                {showClear && (
                    <button className="button" onClick={clearUsers}>
                        Clear
                    </button>
                )}
            </>
        );
    }
}

export default Search;
