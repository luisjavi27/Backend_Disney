const db = require("../database/models")

const characterService ={
    getAllCharacters : async (req, res) => {
    console.log(await db.getAllCharacters)
    res.send("get all ok")
   },
   
    getOneCharacter : (req, res) => {
      
    },
   
    addCharacter :(req, res) => {
      
    },
   
    editCharacter :(req, res) => {
       
    },
   
    deleteCharacter :(req, res) => {
     
    },
   
    searchCharacters :(req, res) => {
       
    }
}



module.exports = characterService;

