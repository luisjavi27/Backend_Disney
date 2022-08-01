const db = require("../database/models");
const sequelize = require("sequelize");

const genreService = {
  getAllGenres: async () => {
    try {
      let allGenres = await db.Genre.findAndCountAll({
        attributes: [["idGenre", "id"], "name", "image"],
        include: {
          model: db.Movie,
          as: "Genres_Movie",
          attributes: ["idMovie", "title"],
        },
      });
      return { data: allGenres.rows, count: allGenres.count };
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  getOneGenre: async (id) => {
    try {
      let genre = await db.Genre.findByPk(id, {
        include: {model: db.Movie,
          as: "Genres_Movie",
          attributes: ["idMovie", "title"],},
      });

      if (genre === null) {
        return { error: { code: 204 } };
      } else {
        return { data: genre };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  createGenre: async (dataNewGenre) => {
 
    try {
      let newGenre = await db.Genre.create(dataNewGenre, {
        fields: ["image", "name"],
      });


      if (newGenre === null) {
        return { error: { code: 500, data: newGenre } };
      } else {
        
        return { data: newGenre };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  editGenre: async (dataEditGenre) => {
    try {
      let genreEdit = await db.Genre.update(dataEditGenre.data, {
        where: { idGenre: dataEditGenre.id },
      });
      
      if (genreEdit === null) {
        return { error: { code: 500, data: GenreEdit } };
      } else {
        return { "Affected rows": genreEdit };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  deleteGenre: async (id) => {
    try {
      let deleteGenre = await db.Genre.destroy({
        where: { idGenre: id },
    });
    
    if (deleteGenre === null) {
        return { error: { code: 500, data: deleteGenre } };
    } else {
        return { "Affected rows": deleteGenre };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  searchGenres: () => {},
};

module.exports = genreService;
