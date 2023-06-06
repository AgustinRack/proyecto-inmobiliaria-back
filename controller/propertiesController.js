const { Properties } = require("../models");

const allProperties = async (req, res) => {
  Properties.findAll().then((properties) => {
    const allProperties = properties.map((property) => property.dataValues);
    res.send(allProperties).status(200);
  });
};

const deleteProperty = async (req, res) => {
  const { id } = req.params;

  Properties.destroy({ where: { id } })
    .then(() => {
      res.status(202).send("Producto eliminado");
    })
    .catch((error) => console.log(error));
};

const modProperty = async (req, res) => {
  const { id } = req.params;
  const {
    size,
    bathrooms,
    bedrooms,
    country,
    neighborhood,
    address,
    description,
    price,
    img,
    imgs,
    categoryId,
  } = req.body;

  Properties.update(
    {
      price: price,
      country: country,
      neighborhood: neighborhood,
      address: address,
      size: size,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
      description: description,
      img: img,
      imgs: imgs,
      categoryId: categoryId,
    },
    { where: { id } }
  )
    .then((properties) => res.status(200).send(properties))
    .catch((error) => console.log(error));
};

module.exports = { allProperties, deleteProperty, modProperty };
