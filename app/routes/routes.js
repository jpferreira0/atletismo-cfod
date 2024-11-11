//? File that imports all the routes of the application and exports them as a single module
const express = require('express');
const router = express.Router();

// Importing routes written in alphabetical order
const apiRoutes = require('./api');
const pageRoutes = require('./pages');

// Applying routes
router.use('/api', apiRoutes);
router.use('/', pageRoutes);


module.exports = router;
