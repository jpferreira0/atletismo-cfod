// File that imports all the middleware functions from the middleware folder and exports them to be used in the app.js file.

//? --- Error handling middleware ---

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
};

//? --- Importing middleware functions written in alphabetical order ---

const renderPage = require('./renderPage');

//? --- Exporting middleware functions as an array ---

module.exports = [
    errorHandler,
    renderPage,
];