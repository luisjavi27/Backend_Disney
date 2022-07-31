let express = require('express');
let router = express.Router();

const characterController = require("../controllers/characterController")

router.get('/', characterController.getAllCharacters);

router.get('/:id', characterController.getOneCharacter);

router.post('/create', characterController.createCharacter);

router.put('/edit/:id', characterController.editCharacter);

router.delete('/delete/:id', characterController.deleteCharacter);


module.exports = router;
