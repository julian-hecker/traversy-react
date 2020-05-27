import React from 'react';
import PropTypes from 'prop-types'

export function UserItem({ user }) {
    const { login, url } = user;
    return (
        <div>
            <h4>{login}</h4>
            <a href={url}>link</a>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem;
