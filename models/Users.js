const { Sequelize } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {}

Users.init(
  {
    admin: { type: Sequelize.BOOLEAN, defaultValue: false },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "Invalid email format",
        },
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    phoneNumber: { type: Sequelize.BIGINT, allowNull: false },
  },
  { sequelize: db, modelName: "users" }
);

Users.beforeCreate((user) => {
  const salt = bcrypt.genSaltSync(10);
  user.salt = salt;

  return user.hash(user.password, user.salt).then((hash) => {
    user.password = hash;
  });
});

Users.prototype.hash = function (plainPassword, salt) {
  return bcrypt.hash(plainPassword, salt);
};

Users.prototype.validatePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

module.exports = Users;
