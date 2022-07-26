module.exports = (sequelize, dataTypes) => {
    
    let cols = {
      idGenre: {
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
      
    };
    let config = {
      timestamps: false,
    };
  
    const Genres = sequelize.define( cols, config);
  
    Genres.associate = function (models) {
  
     
        };
  
    return Genres;
  };
  