const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends Sequelize {}

Users.init(
  {
    admin: { type: Sequelize.BOOLEAN, defaultValue: false },
    name: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    phoneNumber: { type: Sequelize.INTEGER, allowNull: false },
  },
  { sequelize: db, modelName: "users" }
);

module.exports = Users;
