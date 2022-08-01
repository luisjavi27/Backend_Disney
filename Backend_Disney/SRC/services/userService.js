const db = require("../database/models");
const sequelize = require("sequelize");
const bcryptjs = require("bcryptjs");
// const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const userService = {
  getAllUsers: async () => {
    try {
      let allUsers = await db.User.findAndCountAll({
        attributes: [["idUser", "id"], "name", "image"],
        include: {
          model: db.Movie,
          as: "Users_Movie",
          attributes: ["idMovie", "title"],
        },
      });
      return { data: allUsers.rows, count: allUsers.count };
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  getOneUser: async (userData) => {
    try {
      let user = await db.User.findOne({
        where: {
          [sequelize.Op.or]: [
            { userName: [userData.user || ""] },
            { email: [userData.email || ""] },
          ],
        },
        raw: true,
      });

      if (user === null) {
        return { error: { code: 500, data: err.toString() } };
      } else {
        return { data: user };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  createUser: async (dataNewUser) => {
    try {
      let newUser = await db.User.create({
        userName: dataNewUser.name,
        email: dataNewUser.email,
        password: bcryptjs.hashSync(dataNewUser.password, 10),
      });

      if (newUser === null) {
        return { error: { code: 500, data: newUser } };
      } else {
        return { data: newUser };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  loginUser: async (dataUser) => {
    try {
      let user = await db.User.findOne({
        where: { userName: [dataUser.user || ""] },
        raw: true,
      });

      if (user === null) {
        return { data: "invalid credentials" };

      } else if (bcryptjs.compareSync(dataUser.password, user.password)) {
        
          const jwtSecretKey = process.env.JWT_SECRET_KEY;
          const data = {
                time: Date(),
                idUser: user.idUser,
                userName: user.userName
            }
            const token = jwt.sign(data, jwtSecretKey,{
              algorithm: "HS256",
              expiresIn: process.env.JWT_EXPIRY_SECONDS,
            });
            
            return {token};
      } else {
        return { data: "invalid credentials" };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  editUser: async (dataEditUser) => {
    try {
      let UserEdit = await db.User.update(dataEditUser.data, {
        where: { idUser: dataEditUser.id },
      });

      if (UserEdit === null) {
        return { error: { code: 500, data: UserEdit } };
      } else {
        return { "Affected rows": UserEdit };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },

  deleteUser: async (id) => {
    try {
      let deleteUser = await db.User.destroy({
        where: { idUser: id },
      });

      if (deleteUser === null) {
        return { error: { code: 500, data: deleteUser } };
      } else {
        return { "Affected rows": deleteUser };
      }
    } catch (err) {
      return { error: { code: 500, data: err.toString() } };
    }
  },
};

module.exports = userService;
