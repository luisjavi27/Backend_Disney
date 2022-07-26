let express = require('express');
let router = express.Router();

const characterController = require("../controllers/characterController")

router.get('/', characterController.getAllCharacters);

router.get('/:id', characterController.getOneCharacter);

router.post('/add', characterController.addCharacter);

router.patch('/edit/:id', characterController.editCharacter);

router.delete('/delete/:id', characterController.deleteCharacter);

router.get('/characters', characterController.searchCharacters);

module.exports = router;
