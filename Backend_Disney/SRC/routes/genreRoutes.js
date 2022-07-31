let express = require('express');
let router = express.Router();

const genreController = require("../controllers/genreController")

router.get('/', genreController.getAllGenres);

router.get('/:id', genreController.getOneGenre);

router.post('/create', genreController.createGenre);

router.put('/edit/:id', genreController.editGenre);

router.delete('/delete/:id', genreController.deleteGenre);

// router.get('/genres', genreController.searchGenres);

module.exports = router;
