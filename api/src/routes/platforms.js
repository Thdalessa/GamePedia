// const { Router } = require('express');
const express = require('express');
const router = express.Router();
const { getPlatforms} = require('../routesFunctions/platformsRoutes')

// router.post('/', postplatformsFromApi)

router.get('/', getPlatforms)

module.exports = router;