let express = require('express');
let router = express.Router();
let authMiddleware = require('../middlewares/authMiddleware.js')

const genreController = require("../controllers/genreController")

router.get('/', authMiddleware, genreController.getAllGenres);

router.get('/:id', authMiddleware,genreController.getOneGenre);

router.post('/create', authMiddleware, genreController.createGenre);

router.put('/edit/:id', authMiddleware, genreController.editGenre);

router.delete('/delete/:id', authMiddleware, genreController.deleteGenre);

module.exports = router;
