const { Properties } = require("../models");

const allProperties = async (req, res) => {
  Properties.findAll().then((properties) => {
    const allProperties = properties.map((property) => property.dataValues);
    res.send(allProperties).status(200);
  });
};

module.exports = { allProperties };
