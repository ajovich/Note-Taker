// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routers
// Give server a map of how to respond when user visits or requests data from various URLs 
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener
// Starts the server to begin listening
app.listen(PORT, () => { 
    console.log(`App listening on PORT ${PORT}`);
});