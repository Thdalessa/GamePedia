const { Router } = require('express');
const express = require('express');
const {Genre} = require('../db'); // Imports the table Genres that is linked to the DB
const router = express.Router();
const { getGenres} = require('../routesFunctions/genreRoutes')

// router.post('/', postGenresFromApi)

router.get('/', getGenres)

module.exports = router;