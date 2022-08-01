const db = require("../database/models");
const sequelize = require("sequelize");
const bcryptjs = require("bcryptjs");
const { sendMail } = require('../email/account')

const jwt = require('jsonwebtoken');

const userService = {


  getOneUser: async (userData) => {
    try {
      let user = await db.User.findOne({
        where: {
             email: [userData || ""] ,
        },
        attributes: [
          ["idUser", "id"],
          ["userName", "user"],
          "email"
        ],
        raw: true,
      });

      if (user === null) {
        return { data: "Email not found " };
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
        userName: dataNewUser.user,
        email: dataNewUser.email,
        password: bcryptjs.hashSync(dataNewUser.password, 10),
      });

      if (newUser === null) {
        return { error: { code: 500, data: newUser } };
      } else {

        sendMail(newUser.email, "Welcome to APY Disney")
        // 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


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

}

module.exports = userService;
