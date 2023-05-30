const { Sequelize } = require("sequelize");
const db = require("../db");

class Users extends Sequelize.Model {}

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
