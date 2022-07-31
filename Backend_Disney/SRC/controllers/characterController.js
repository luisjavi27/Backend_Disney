const characterService = require("../services/characterService");

const characterController = {
  getAllCharacters: async (req, res) => {
    let allCharacters = await characterService.getAllCharacters(req.query);
    if (allCharacters.error) {
      res.status(500);
      res.send(allCharacters);
    } else {
      res.status(200);
      res.send(allCharacters);
    }
  },

  getOneCharacter: async (req, res) => {
    let character = await characterService.getOneCharacter(req.params.id);
console.log("aqui noS")
    if (character.error) {
      res.status(character.error.code);
      res.send({ response: character.error.data });
    } else {
      res.status(200);
      res.send(character);
    }
  },

  createCharacter: async (req, res) => {

    let {in_movies, ...dataNewCharacter} = req.body;
    in_movies = in_movies.split(",")

    dataNewCharacter.in_movies=[];
    in_movies.forEach((movie)=>{
      dataNewCharacter.in_movies.push({idMovieFK:movie})
    });
    
    let newCharacter = await characterService.createCharacter(dataNewCharacter);

    if (newCharacter.error) {
      res.status(newCharacter.error.code);
      res.send({ response: newCharacter.error.data });
    } else {
      res.status(201);
      res.send(newCharacter);
    }
  },

  editCharacter: async (req, res) => {
    let { ...data } = req.body;

    let characterEdit = await characterService.editCharacter({
      id: req.params.id,
      data: data,
    });

    if (characterEdit.error) {
      res.status(characterEdit.error.code);
      res.send({ response: characterEdit.error.data });
    } else {
      res.status(200);
      res.send(characterEdit);
    }
  },

  deleteCharacter: async (req, res) => {
    let deleteCharacter = await characterService.deleteCharacter(req.params.id);

    if (deleteCharacter.error) {
      res.status(deleteCharacter.error.code);
      res.send({ response: deleteCharacter.error.data });
    } else {
      res.status(200);
      res.send(deleteCharacter);
    }
  },

};

module.exports = characterController;
