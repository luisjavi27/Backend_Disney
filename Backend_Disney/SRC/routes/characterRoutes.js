let express = require('express');
let router = express.Router();
let authMiddleware = require('../middlewares/authMiddleware.js')

const characterController = require("../controllers/characterController")

router.get('/', authMiddleware, characterController.getAllCharacters);

router.get('/:id', authMiddleware,characterController.getOneCharacter);

router.post('/create', authMiddleware,characterController.createCharacter);

router.put('/edit/:id', authMiddleware,characterController.editCharacter);

router.delete('/delete/:id', authMiddleware,characterController.deleteCharacter);


module.exports = router;
