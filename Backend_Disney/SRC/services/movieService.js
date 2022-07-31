const db = require("../database/models");
const sequelize = require("sequelize");

const movieService = {
  getAllMovies: async () => {
    try {
      let allMovies = await db.Movie.findAndCountAll({
        attributes: [["idMovie", "id"], "title", "relaseDate", "rating", "image"],
        include: {
          model: db.Character,
          as: "Movie_Character",
          attributes: ["idCharacter", "name"],
        },
      });
      return { data: allMovies.rows, count: allMovies.count };
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  getOneMovie: async (id) => {
    try {
      let movie = await db.Movie.findByPk(id, {
        include: {model: db.Character,
          as: "Movie_Character",
          attributes: ["idCharacter", "name"],},
      });

      if (movie === null) {
        return { error: { code: 204 } };
      } else {
        return { data: movie };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  createMovie: async (dataNewMovie) => {
 

    try {
      let newMovie = await db.Movie.create(dataNewMovie, {
        fields: ["image", "title", "relaseDate", "rating"],
      });


      if (newMovie === null) {
        return { error: { code: 500, data: newMovie } };
      } else {
        
        return { data: newMovie };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  editMovie: async (dataEditMovie) => {
    try {
      let movieEdit = await db.Movie.update(dataEditMovie.data, {
        where: { idMovie: dataEditMovie.id },
      });
      
      if (movieEdit === null) {
        return { error: { code: 500, data: movieEdit } };
      } else {
        return { "Affected rows": movieEdit };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  deleteMovie: async (id) => {
    try {
      let deleteMovie = await db.Movie.destroy({
        where: { idMovie: id },
    });
    
    if (deleteMovie === null) {
        return { error: { code: 500, data: deleteMovie } };
    } else {
        return { "Affected rows": deleteMovie };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  searchMovies: () => {},
};

module.exports = movieService;
