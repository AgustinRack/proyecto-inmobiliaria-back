const { Properties } = require("../models/Properties");

const allProperties = async (req, res) => {
  Properties.findAll().then((properties) => {
    const allProperties = properties.map((property) => property.dataValues);
    res.send(allProperties);
  });
};

module.exports = { allProperties };
