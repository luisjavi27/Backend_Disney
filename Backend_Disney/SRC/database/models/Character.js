module.exports = (sequelize, dataTypes) => {
  let alias = "Character";
    let cols = {
      idCharacter: {
        type: dataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: dataTypes.STRING(200),
      },
      name: {
        type: dataTypes.STRING(45),
        allowNull: false,
        unique:true
      },
      age: {
        type: dataTypes.BIGINT(10),
      },
      weight: {
        type: dataTypes.BIGINT(10),
      },
      history: {
        type: dataTypes.STRING(200),
      },
    };
    let config = {
      timestamps: false,
    };
  
    const Character = sequelize.define( alias, cols, config);
  
    Character.associate = function (models) {

      Character.belongsToMany(models.Movie, { 
        as: "Character_Movies",
        through:"Movies_character",
        foreignKey: "idCharacterFK",
        otherKey:"idMovieFK",
        timestamps: false,  
      });

      Character.hasMany(models.Movies_character, {
        as: "in_movies",
        foreignKey: "idCharacterFK",
        timestamps: false,
      });

        };
  
    return Character;
  };
  