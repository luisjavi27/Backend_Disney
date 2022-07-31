module.exports = (sequelize, dataTypes) => {
  let alias = "Movies_character";
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
  
    const Movies_character = sequelize.define(alias, cols, config);
  
    Movies_character.associate = function (models) {

      Movies_character.belongsTo(models.Movie, {
        as: "Movies_character_Movies", 
        foreignKey: "idMovieFK", 
      });
  
  
      Movies_character.belongsTo(models.Character, {
        as: "Movies_character__characters", 
        foreignKey: "idCharacterFK", 
      });
    };
  
    return Movies_character;
  };
  