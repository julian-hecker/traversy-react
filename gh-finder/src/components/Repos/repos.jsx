import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';

function Repos({ repos }) {
    return repos.map((repo) => {
        return <Item key={repo.id} repo={repo} />;
    });
}

Repos.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default Repos;
