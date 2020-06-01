import React, { useContext } from 'react';
import Item from './item';
import Spinner from '../Spinner';

import GithubContext from '../../context/github/githubContext';

const UserItems = (props) => {
    const ghctx = useContext(GithubContext);
    const { loading, users } = ghctx;

    if (loading) {
        return <Spinner />;
    }
    return (
        <div
            className="userItems"
            style={{
                display: 'grid',
                gridTemplateColumns:
                    'repeat( auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                margin: '0 2rem',
                textAlign: 'center',
            }}
        >
            {users.map((user) => (
                <Item key={user.id} user={user} />
            ))}
        </div>
    );
};


export default UserItems;
