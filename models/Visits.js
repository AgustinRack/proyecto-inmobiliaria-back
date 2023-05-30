const { Sequelize, DataTypes } = require("sequelize");
const db = require("../db");

class Visits extends Sequelize.Model {}

Visits.init(
  {
    date: { type: DataTypes.DATE, allowNull: false },
    schedule: { type: DataTypes.TIME, allowNull: false },
  },
  { sequelize: db, modelName: "visits" }
);

module.exports = Visits;
