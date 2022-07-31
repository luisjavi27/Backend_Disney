module.exports = (sequelize, dataTypes) => {
    let alias = "Genre"
    let cols = {
      idGenre: {
        type: dataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true,
      },
      image: {
        type: dataTypes.STRING(200),
        allowNull:false
      },
      name: {
        type: dataTypes.STRING(45),
        allowNull: false,
        unique:true
        
      },
      
    };
    let config = {
      timestamps: false,
    };
  
    const Genres = sequelize.define(alias, cols, config);
  
    Genres.associate = function (models) {
      Genres.belongsToMany(models.Movie, { 
        as: "Genres_Movie",
        through:"Movies_Genres",
        foreignKey: "idGenreFK",
        otherKey:"idMovieFK",
        timestamps: false,  
      });

      Genres.hasMany(models.Movies_genre, {
        as: "of_movie",
        foreignKey: "idGenreFK",
        timestamps: false,
      });
     
        };
  
    return Genres;
  };
  