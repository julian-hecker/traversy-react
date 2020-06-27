import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon, links }) => {
    return (
        <nav>
            <h1>
                <i className={icon}></i> {title}
            </h1>
            {!!links.length && (
                <ul>
                    {links.map((link) => (
                        <li>
                            <Link to={link.url}>{link.text}</Link>
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
    links: []
};

export default Navbar;
