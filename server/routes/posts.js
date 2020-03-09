const express = require('express');

const router = express.Router();
const {
    getData,
    getPost
} = require('../controllers/routing')

router.get('/', getData)
    .get('/:id', getPost);


// Make sure to export the router so it becomes available on imports
module.exports = router;