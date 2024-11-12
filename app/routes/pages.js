//? Routes of the different pages of the application
const express = require('express');
const router = express.Router();

// Homepage route
const homepageController = require('../controllers/pages/homepage');
router.get('/', homepageController);

// Other pages routes
const appsRoutes = require('./pages/apps');
const clubRoutes = require('./pages/club');
const competitionsRoutes = require('./pages/competitions');
const rankingResultsRoutes = require('./pages/ranking_results');


// Applying routess
router.use('/apps', appsRoutes);
router.use('/clube', clubRoutes);
router.use('/competicoes', competitionsRoutes);
router.use('/marcas', rankingResultsRoutes);

module.exports = router;