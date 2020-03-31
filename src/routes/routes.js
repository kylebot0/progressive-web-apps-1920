const express = require('express');

const router = express.Router();
const path = {
    getOverview,
    getLaunches,
    getShips,
    getCapsules,
    getRockets,
    getSingleLaunch,
    getSingleCapsule,
    getSingleRocket,
    getSingleShip,
    getOffline
} = require('../controllers/routesController')

router.get('/', path.getOverview)
    .get('/launches', path.getLaunches)
    .get('/launches/:id', path.getSingleLaunch)
    .get('/ships', path.getShips)
    .get('/ships/:id', path.getSingleShip)
    .get('/capsules', path.getCapsules)
    .get('/capsules/:id', path.getSingleCapsule)
    .get('/rocket', path.getRockets)
    .get('/rocket/:id', path.getSingleRocket)
    .get('/offline', path.getOffline);


// Make sure to export the router so it becomes available on imports
module.exports = router;