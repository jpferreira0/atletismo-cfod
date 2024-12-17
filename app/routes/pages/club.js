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

//* --- "Lista de modalidades" page routes --- *//

        //? "Velocidade" page route
        const velocityController = require('../../controllers/pages/club/athletics_events/velocity');
        router.get('/atletismo/velocidade', velocityController);

        //? "Meio-fundo e fundo" page route
        const distanceController = require('../../controllers/pages/club/athletics_events/distance');
        router.get('/atletismo/distancias', distanceController);

        //? "Saltos" page route
        const jumpsController = require('../../controllers/pages/club/athletics_events/jumps');
        router.get('/atletismo/saltos', jumpsController);

        //? "Lançamentos" page route
        const throwsController = require('../../controllers/pages/club/athletics_events/throws');
        router.get('/atletismo/lancamentos', throwsController);

        //? "Barreiras" page route
        const barreirasController = require('../../controllers/pages/club/athletics_events/hurdles');
        router.get('/atletismo/barreiras', barreirasController);

        //? "Provas combinadas" page route
        const combinedEventsController = require('../../controllers/pages/club/athletics_events/combined_events');
        router.get('/atletismo/provascombinadas', combinedEventsController);

        //? "Marcha Atlética" page route
        const racewalkController = require('../../controllers/pages/club/athletics_events/racewalk');
        router.get('/atletismo/marcha', racewalkController);

        //? "Estafetas" page route
        const relayController = require('../../controllers/pages/club/athletics_events/relay');
        router.get('/atletismo/estafetas', relayController);

        //? "Outras provas" page route
        const othersController = require('../../controllers/pages/club/athletics_events/others');
        router.get('/atletismo/outrasprovas', othersController);

//* End of "Lista de modalidades" page routes *//

//? "Os nossos treinos" page route
const trainingsController = require('../../controllers/pages/club/trainings');
router.get('/treinos', trainingsController);

//? "O nosso equipamento" page route
const equipmentController = require('../../controllers/pages/club/equipment');
router.get('/equipamento', equipmentController);

module.exports = router;