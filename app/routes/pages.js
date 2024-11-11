//? Routes of the different pages of the application
const express = require('express');
const router = express.Router();

const homepageController = require('../controllers/pages/homepage');
router.get('/', homepageController);

const aboutController = require('../controllers/pages/aboutController');
router.get('/aboutus', aboutController);

const practiceController = require('../controllers/pages/practice');
router.get('/practice', practiceController);

module.exports = router;