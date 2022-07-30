let express = require('express');
let router = express.Router();

const movieController = require("../controllers/movieController")

router.get('/', movieController.getAllMovies);

router.get('/:id', movieController.getOneMovie);

router.post('/create', movieController.createMovie);

router.put('/edit/:id', movieController.editMovie);

router.delete('/delete/:id', movieController.deleteMovie);

// router.get('/movies', movieController.searchMovies);

module.exports = router;
