module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    
    idUser: {
      type: dataTypes.BIGINT(10),
      primaryKey: true,
      autoIncrement: true,
    },
    userName: {
      type: dataTypes.STRING(45),
    },
    email: {
      type: dataTypes.STRING(45),
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.STRING(100),
    },
  };
  let config = {
    timestamps: true,
    createdAt: "createAt",
    updatedAt: "updatedAt",
    deletedAt: false,
  };

  const User = sequelize.define( alias, cols, config);

  User.associate = function (models) {};

  return User;
};
