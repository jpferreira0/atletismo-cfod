//? Routes for all the club related pages
const express = require('express');
const router = express.Router();

//? "Quem somos?" page route
const aboutController = require('../../controllers/pages/club/about');
router.get('/sobre', aboutController);

//? "Os nossos atletas" page route
const athletesController = require('../../controllers/pages/club/athletes');
router.get('/atletas', athletesController);

//? "O que é Atletismo?" page route
const athleticsController = require('../../controllers/pages/club/athletics');
router.get('/atletismo', athleticsController);

//? "Os nossos treinos" page route
const trainingsController = require('../../controllers/pages/club/trainings');
router.get('/treinos', trainingsController);

//? "O nosso equipamento" page route
const equipmentController = require('../../controllers/pages/club/equipment');
router.get('/equipamento', equipmentController);

module.exports = router;