const express = require('express');

const router = express.Router();
const {
    getPosts,
    getPost
} = require('../controllers/routing')

router.get('/', getPosts)
    .get('/:id', getPost);


// Make sure to export the router so it becomes available on imports
module.exports = router;