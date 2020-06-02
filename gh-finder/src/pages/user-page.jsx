import React, { useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Repos from '../components/Repos/repos';
import GithubContext from '../context/github/githubContext';

const UserPage = ({ match }) => {
    const ghctx = useContext(GithubContext);
    const { loading, user, repos, getUser, getUserRepos } = ghctx;

    useEffect(() => {
        const { login } = match.params;
        getUser(login);
        getUserRepos(login);
        // eslint-disable-next-line
    }, []);

    const {
        login,
        html_url,
        avatar_url,
        name,
        // company,
        // blog,
        location,
        // email,
        hireable,
        bio,
    } = user;

    return (
        <div className="">
            <Link to="/">Back</Link>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <img
                        src={avatar_url}
                        alt={`${name}'s profile pic`}
                        style={{
                            maxWidth: '200px',
                        }}
                    />
                    <h3>
                        {name}
                        <span
                            style={{
                                fontWeight: 'lighter',
                            }}
                        >
                            {' '}
                            ({login})
                        </span>
                    </h3>
                    {bio && <p>{bio}</p>}
                    <a href={html_url}>Github Page</a>
                    {location && (
                        <p>
                            <strong>Location</strong>: {location}
                        </p>
                    )}
                    {hireable && (
                        <p>
                            <strong>Hire me!</strong>
                        </p>
                    )}
                    <Repos repos={repos} />
                </>
            )}
        </div>
    );
};

export default UserPage;
