import React from 'react';

const Navbar = ({title, links}) => {
    return (
        <nav>
            <h1>{title}</h1> 
            {links.length && (
                <ul>
                    {links.map(link => {
                        <li><Link to={link.url}>{link.text}</Link></li>
                    })}
                </ul>
            )}
        </nav>
    )
}

export default Navbar;
