import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import AppRouter from './routes';

ReactDOM.render(
    <React.StrictMode>
        <AppRouter />
    </React.StrictMode>,
    document.getElementById('root'),
);
