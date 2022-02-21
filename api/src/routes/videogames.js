const express = require('express');
const router = express.Router();
const {getAllVideogames, createVideogame, getVidegameById} = require('../routesFunctions/videogameRoutes')

router.get('/', getAllVideogames)

router.get('/:id', getVidegameById)

router.post('/', createVideogame)

module.exports = router;

