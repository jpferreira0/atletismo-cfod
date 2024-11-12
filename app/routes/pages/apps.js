//? Routes for all the apps
const express = require('express');
const router = express.Router();

//? "Calculadora de Pontos" route
const calculatorController = require('../../controllers/pages/apps/calculator');
router.get('/calculadora', calculatorController);

module.exports = router;