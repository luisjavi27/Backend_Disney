module.exports = (sequelize, dataTypes) => {
  let alias = "Movies_genre";
  let cols = {
    idMovies_genres: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    idMovieFK: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
    idGenreFK: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
  };

  const Movies_genres = sequelize.define(alias, cols, config);

  Movies_genres.associate = function (models) {
    Movies_genres.belongsTo(models.Movie, {
      as: "Movies_genres_Movies",
      foreignKey: "idMovieFK",
    });

    Movies_genres.belongsTo(models.Genre, {
      as: "Movies_genres_Genres",
      foreignKey: "idGenreFK",
    });
  };

  return Movies_genres;
};
