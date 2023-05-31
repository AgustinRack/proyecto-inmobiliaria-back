const { Sequelize } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {}

Users.init(
  {
    admin: { type: Sequelize.BOOLEAN, defaultValue: false },
    name: { type: Sequelize.STRING, allowNull: false },
    lastName: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    phoneNumber: { type: Sequelize.INTEGER, allowNull: false },
  },
  { sequelize: db, modelName: "users" }
);

Users.beforeCreate((user) => {
  const saltRounds = 10;

  return bcrypt
    .genSalt(saltRounds)
    .then((salt) => {
      user.salt = salt;
      return bcrypt.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

Users.prototype.hash = function (plainPassword, salt) {
  return bcrypt.hash(plainPassword, salt);
};

Users.prototype.validatePassword = function (password) {
  return bcrypt
    .hash(password, this.salt)
    .then((hash) => hash === this.password);
};

module.exports = Users;
