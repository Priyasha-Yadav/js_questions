const { addMovies, getMovies } =  require('../controller/movieController')

const express = require('express')

const router = express.Router();
router.post('/', addMovies);
router.get('/', getMovies);


module.exports = router;
