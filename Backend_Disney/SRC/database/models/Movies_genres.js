module.exports = (sequelize, dataTypes) => {
  let cols = {
    idMovies_genres: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    idMoviesFK: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
    idGenresFK: {
      type: dataTypes.BIGINT(10),
      allowNull: false,
    },
  };
  let config = {
    timestamps: false,
  };

  const Movies_genres = sequelize.define("Movies_genres", cols, config);

  Movies_genres.associate = function (models) {};

  return Movies_genres;
};
