const express = require('express');

const router = express.Router();
const {
    getLaunches,
    getShips,
    getCapsules,
    getRockets,
    getSingleLaunch
} = require('../controllers/routesController')

router.get('/', getLaunches)
    .get('/launches', getLaunches)
    .get('/launches/:id', getSingleLaunch)
    .get('/ships', getShips)
    .get('/ships/:id')
    .get('/capsules', getCapsules)
    .get('/capsules/:id')
    .get('/rocket', getRockets)
    .get('/rocket/:id');


// Make sure to export the router so it becomes available on imports
module.exports = router;