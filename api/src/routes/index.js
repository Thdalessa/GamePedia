const express = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRoute = require('./videogames');
const genreRoute = require('./genres');
const platformsRoute = require('./platforms');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogameRoute); // this route would be /api/videogames/
router.use('/genres', genreRoute);         // this route would be /api/genres/
router.use('/platforms', platformsRoute);// this route would be /api/platforms/

module.exports = router;
