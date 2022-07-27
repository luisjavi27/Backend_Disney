const db = require("../database/models")

const characterService ={
    getAllCharacters : async () => {
        try{
            let allCharacters= await db.Character.findAll();

            return allCharacters    
        }catch(err){
            console.log(err)
        }

   },
   
    getOneCharacter : () => {
      
    },
   
    addCharacter :() => {
      
    },
   
    editCharacter :() => {
       
    },
   
    deleteCharacter :() => {
     
    },
   
    searchCharacters :() => {
       
    }
}



module.exports = characterService;

