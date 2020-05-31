import React from 'react';
import PropTypes from 'prop-types';

function Item({ repo }) {
    return (
        <div className="repo">
            <h4>
                <a href={repo.html_url}>{repo.name}</a>
            </h4>
        </div>
    );
}

Item.propTypes = {
    repo: PropTypes.object.isRequired,
};

export default Item;
