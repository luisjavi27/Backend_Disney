const db = require("../database/models");
const sequelize = require("sequelize");

const characterService = {
  getAllCharacters: async () => {
    try {
      let allCharacters = await db.Character.findAndCountAll({
        attributes: [["idCharacter", "id"], "name", "image"],
      });
      return { data: allCharacters.rows, count: allCharacters.count };
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  getOneCharacter: async (id) => {
    try {
      let character = await db.Character.findByPk(id);

      if (character === null) {
        return { error: { code: 204 } };
      } else {
        return { data: character };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  createCharacter: async (dataNewCharacter) => {
    try {
      let newCharacter = await db.Character.create(dataNewCharacter, {
        fields: ["image", "name", "age", "weight", "history"],
      });

      if (newCharacter === null) {
        return { error: { code: 500, data: newCharacter } };
      } else {
        return { data: newCharacter };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  editCharacter: async (dataEditCharacter) => {
    try {
      let characterEdit = await db.Character.update(dataEditCharacter.data, {
        where: { idCharacter: dataEditCharacter.id },
      });

      if (characterEdit === null) {
        return { error: { code: 500, data: characterEdit } };
      } else {
        return { "Affected rows": characterEdit };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  deleteCharacter: async (id) => {
    try {
      let deleteCharacter = await db.Character.destroy({
        where: { idCharacter: id },
    });
    
    if (deleteCharacter === null) {
        return { error: { code: 500, data: deleteCharacter } };
    } else {
        return { "Affected rows": deleteCharacter };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  searchCharacters: () => {},
};

module.exports = characterService;
