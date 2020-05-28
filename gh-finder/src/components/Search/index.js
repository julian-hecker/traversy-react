import React, { Component } from 'react';

export class Search extends Component {
    state = {
        search: '',
    };
    
    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
    }


    onChange = (ev) => {
        // // instead of setting state for each individual field
        // this.setState({ [ev.target.name]: ev.target.value });
        this.setState({ search: [ev.target.value] });
    };

    onSubmit = (ev) => {
        ev.preventDefault();
        this.props.searchUsers(this.state.search);
    };

    render() {
        return (
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
        );
    }
}

export default Search;
