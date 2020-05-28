import React from 'react';
import PropTypes from 'prop-types';

import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export function Navbar({ title }) {
    return (
        <nav className={styles.nav}>
            <h1>{title}</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
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
