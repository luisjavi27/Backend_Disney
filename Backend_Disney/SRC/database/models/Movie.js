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
  
    const Movies = sequelize.define( alias, cols, config);
  
    Movies.associate = function (models) {
  
     
        };
  
    return Movies;
  };
  