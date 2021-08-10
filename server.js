// Dependencies
const express = require('express');
const routes = require('./routes');

// Sets up Express app
const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));