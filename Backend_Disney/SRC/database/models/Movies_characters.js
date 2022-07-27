module.exports = (sequelize, dataTypes) => {
    let cols = {
        idMovies_characters: {
        type: dataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
      },
      idCharacterFK: {
        type: dataTypes.BIGINT(10),
        allowNull: false,
      },
      idMovieFK: {
        type: dataTypes.BIGINT(10),
        allowNull: false,
      },
 
    };
    let config = {
      timestamps: false,
    };
  
    const Movies_characters = sequelize.define("Movies_characters", cols, config);
  
    Movies_characters.associate = function (models) {};
  
    return Movies_characters;
  };
  