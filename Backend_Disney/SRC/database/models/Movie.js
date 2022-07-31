module.exports = (sequelize, dataTypes) => {
  let alias = "Movie";
    
    let cols = {
      idMovie: {
        type: dataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: dataTypes.STRING(200),
      },
      title: {
        type: dataTypes.STRING(45),
        allowNull: false,
        unique:true
      },
      relaseDate: {
        type: dataTypes.DATE,
      },
      rating: {
        type: dataTypes.BIGINT(10),
      },
    };
    let config = {
      timestamps: false,
    };
  
    const Movie = sequelize.define( alias, cols, config);
  
    Movie.associate = function (models) {
      Movie.belongsToMany(models.Character, {
        as: "Movie_Character",
        through:"Movies_character",
        foreignKey: "idMovieFK",
        otherKey:"idCharacterFK",
        timestamps: false,  
      });

      Movie.hasMany(models.Movies_character, {
        as: "characters_in",
        foreignKey: "idMovieFK",
        timestamps: false,
      });
  
        };
  
    return Movie;
  };
  