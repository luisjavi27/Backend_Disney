
const characterService = require("../services/characterService")

const characterController ={
     getAllCharacters : async (req, res) => {

        let allCharacters = await characterService.getAllCharacters();
        res.json(allCharacters);
    },
    
     getOneCharacter : (req, res) => {

        let character = characterService.getOneCharacter;
        res.send(`get ONE character ${JSON.stringify(req.params)}`);
     },
    
     addCharacter :(req, res) => {

        let newCharacter = characterService.addCharacter;
        res.send(`add character`);
     },
    
     editCharacter :(req, res) => {

        let editCharacter = characterService.editCharacter;
        res.send(`edit character ${JSON.stringify(req.params)}`);
     },
    
     deleteCharacter :(req, res) => {

        let deleteCharacter = characterService.deleteCharacter;
        res.send(`delete character "Param: ${JSON.stringify(req.params)}"`);
     },
    
     searchCharacters :(req, res) => {

        let searchCharacters = characterService.searchCharacters;
        res.send(`search character "Query String: ${JSON.stringify(req.query)}"`);
     }
}



module.exports = characterController

