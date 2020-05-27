import React from 'react';
import PropTypes from 'prop-types';

export function Navbar({ title }) {
    return (
        <nav
            className="nav"
            style={{ backgroundColor: 'yellowgreen' }}
        >
            <h1>{title}</h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Site Heading',
};
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Navbar;
