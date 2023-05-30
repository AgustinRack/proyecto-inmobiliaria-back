const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class favorites extends Sequelize {}

Visits.Favorites(
  {
    user_id: { type: DataType.DATE, allowNull: false },
    properties_id: { type: DataType.TIME, allowNull: false },
  },
  { sequelize: db, modelName: "Favorites" }
);

module.exports = Favorites;
