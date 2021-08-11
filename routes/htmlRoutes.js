// Dependencies
// Need to include path package to get correct file path for html
const path = require('path');
const fs = require('fs');

// Routing
module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // If no matching route is found, default to index.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};
