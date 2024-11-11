const express = require('express');
const router = express.Router();

//! Example route to test the API
router.get('/example', (req, res) => {
    res.send('Hello from API');
});

module.exports = router;