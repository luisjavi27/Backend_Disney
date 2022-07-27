module.exports = (sequelize, dataTypes) => {
    
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
  
    const Character = sequelize.define( "Character", cols, config);
  
    // Character.associate = function (models) {
  
     
    //     };
  
    return Character;
  };
  