import React from 'react';
import PropTypes from 'prop-types'

const Item = ({ user }) => {
    const { login, html_url } = user;
    return (
        <div>
            <h4>{login}</h4>
            <a href={html_url}>link</a>
        </div>
    );
}

Item.propTypes = {
    user: PropTypes.object.isRequired,
}

export default Item;
