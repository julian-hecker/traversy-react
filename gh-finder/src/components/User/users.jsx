import React from 'react';
import Item from './item';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

const UserItems = ({ users, loading }) => {
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

UserItems.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default UserItems;

