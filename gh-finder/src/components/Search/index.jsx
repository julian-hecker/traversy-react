import React, { useState, useContext } from 'react';

import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = () => {
    const ghctx = useContext(githubContext);
    const actx = useContext(alertContext);

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
            actx.setAlert('enter something plz', 'light');
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


export default Search;
