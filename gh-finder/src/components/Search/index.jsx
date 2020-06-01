import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';

const Search = ({ showAlert }) => {
    const ghctx = useContext(GithubContext);

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
            showAlert('enter something plz', 'light');
        } else {
            ghctx.searchUsers(search);
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
            {ghctx.users.length > 0 && (
                <button className="button" onClick={ghctx.clearUsers}>
                    Clear
                </button>
            )}
        </>
    );
};

Search.propTypes = {
    showAlert: PropTypes.func.isRequired,
};

export default Search;
