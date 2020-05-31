import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Repos from '../components/Repos/repos';


export class UserPage extends Component {
    componentDidMount() {
        const username = this.props.match.params.login;
        const { getUser, getUserRepos } = this.props;
        getUser(username);
        getUserRepos(username);
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    };

    render() {
        const { loading, user, repos } = this.props;
        const {
            login,
            html_url,
            avatar_url,
            name,
            company,
            blog,
            location,
            email,
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
                            <Repos repos={repos}/>
                    </>
                )}
            </div>
        );
    }
}

export default UserPage;
