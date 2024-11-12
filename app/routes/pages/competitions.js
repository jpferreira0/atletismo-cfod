//? Routes for all the competitions pages
const express = require('express');
const router = express.Router();

//? "Calendário competitivo" page route
const calendarController = require('../../controllers/pages/competitions/calendar');
router.get('/calendario', calendarController);

//? "Marcas de qualificação" page route
const minimumController = require('../../controllers/pages/competitions/minimum');
router.get('/minimos', minimumController);

module.exports = router;