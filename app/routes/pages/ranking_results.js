//? Routes for all the competitions pages
const express = require('express');
const router = express.Router();

//? "Resultados" page route
const resultsController = require('../../controllers/pages/rankings_results/results');
router.get('/resultados', resultsController);

//? "Rankings" page route
const rankingController = require('../../controllers/pages/rankings_results/rankings');
router.get('/rankings', rankingController);

module.exports = router;