const { Sequelize } = require("sequelize");
const db = require("../db");

class Properties extends Sequelize.Model {}

Properties.init(
  {
    is_for_rent: { type: Sequelize.BOOLEAN, allowNull: false },
    price: { type: Sequelize.BIGINT, allowNull: false },
    country: { type: Sequelize.STRING, allowNull: false },
    province: { type: Sequelize.STRING, allowNull: false },
    neighborhood: { type: Sequelize.STRING, allowNull: false },
    address: { type: Sequelize.STRING, allowNull: false },
    size: { type: Sequelize.INTEGER, allowNull: false },
    bedrooms: { type: Sequelize.INTEGER, allowNull: false },
    bathrooms: { type: Sequelize.INTEGER, allowNull: false },
    description: { type: Sequelize.STRING, allowNull: false },
    img: { type: Sequelize.STRING, allowNull: false },
    imgs: { type: Sequelize.ARRAY(Sequelize.STRING), allowNull: false },
  },
  { sequelize: db, modelName: "properties" }
);

module.exports = Properties;
