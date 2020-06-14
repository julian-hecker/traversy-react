// === Packages ===
const express = require('express'),
    path = require('path');

// === App Config ===
const app = express(),
    buildDirectory = path.join(__dirname, '..', 'build');

require('./config')();
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(buildDirectory));

// === Routes ===
app.use('/api', require('./routes'));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildDirectory, 'index.html'));
});

module.exports = app;

/** Todo
 * connect database in mongo, do the app
 * Update CRA-template to include:
 * - authentication, middlewares, better react app
 *
 */
