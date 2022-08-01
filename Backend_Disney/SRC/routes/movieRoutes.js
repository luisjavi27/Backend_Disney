let express = require('express');
let router = express.Router();
let authMiddleware = require('../middlewares/authMiddleware.js')

const movieController = require("../controllers/movieController")

router.get('/', authMiddleware, movieController.getAllMovies);

router.get('/:id', authMiddleware, movieController.getOneMovie);

router.post('/create', authMiddleware,movieController.createMovie);

router.put('/edit/:id', authMiddleware, movieController.editMovie);

router.delete('/delete/:id', authMiddleware, movieController.deleteMovie);

// router.get('/movies', movieController.searchMovies);

module.exports = router;
