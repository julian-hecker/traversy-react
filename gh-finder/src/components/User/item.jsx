import React from 'react';
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom';

const Item = ({ user }) => {
    const { login } = user;
    return (
        <div>
            <h4>{login}</h4>
            <Link to={`/user/${login}`}>More</Link>
        </div>
    );
}

Item.propTypes = {
    user: PropTypes.object.isRequired,
}

export default Item;
