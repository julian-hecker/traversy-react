import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
    const [search, setSearch] = useState('');

    const onChange = (ev) => {
        // instead of setting state for each individual field
        // this.setState({ [ev.target.name]: ev.target.value });
        // instead of using class based this.setState
        setSearch(ev.target.value);
    };

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!search) {
            setAlert('enter something plz', 'light');
        } else {
            searchUsers(search);
            setSearch('');
        }
    };

    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <input
                    type="search"
                    name="search"
                    placeholder="Search for a user..."
                    value={search}
                    onChange={onChange}
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
};

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
};

export default Search;
