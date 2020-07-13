import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

const Navbar = ({ title, icon, links }) => {
    return (
        <nav className={styles.navbar}>
            <Link to="/">
                <h1>
                    <i className={icon}></i> {title}
                </h1>
            </Link>
            {!!links.length && (
                <ul>
                    {links.map((link, n) => (
                        <li>
                            <Link to={link.url} key={n}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    links: PropTypes.array,
};

Navbar.defaultProps = {
    title: 'Contact Keeper',
    icon: 'fas fa-id-card-alt',
    links: [],
};

export default Navbar;
