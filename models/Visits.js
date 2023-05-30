const { Sequelize, DataType } = require("Sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class Visits extends Sequelize {}

Visits.init(
  {
    date: { type: DataType.DATE, allowNull: false },
    schedule: { type: DataType.TIME, allowNull: false },
  },
  { sequelize: db, modelName: "visits" }
);

module.exports = Visits;
