module.exports = (sequelize, dataTypes) => {
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
      type: dataTypes.DATE,
    },
  };
  let config = {
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: false,
  };

  const Users = sequelize.define(alias, cols, config);

  Users.associate = function (models) {};

  return Users;
};
