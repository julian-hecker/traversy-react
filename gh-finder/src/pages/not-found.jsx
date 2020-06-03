import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404: Page Not Found</h1>
            <p>These are not the pages you are looking for...</p>
            <Link to="/">Back to safety</Link>
        </div>
    );
};

export default NotFound;
