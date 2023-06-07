const { Properties, Categories } = require("../models");

const allProperties = async (req, res) => {
  Properties.findAll({
    include: {
      model: Categories,
    },
  }).then((properties) => {
    res.send(properties).status(200);
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

const editProperty = async (req, res) => {
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

const getPropertiesForRent = async (req, res) => {
  Properties.findAll({
    include: { model: Categories },
    where: { is_for_rent: true },
  })
    .then((properties) => {
      res.send(properties).status(200);
    })
    .catch((err) => res.status(404).send(err));
};

const getPropertiesForSale = async (req, res) => {
  Properties.findAll({
    include: { model: Categories },
    where: { is_for_rent: false },
  })
    .then((properties) => {
      res.send(properties).status(200);
    })
    .catch((err) => res.status(404).send(err));
};

//COMO ADMIN AGREGAR UNA PROPIEDAD

const createProperty = async (req, res) => {
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

  try {
    const property = await Properties.create({
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
    });

    res.status(201).send(property);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error al crear la propiedad");
  }
};

module.exports = {
  allProperties,
  deleteProperty,
  editProperty,
  getPropertiesForRent,
  getPropertiesForSale,
  createProperty,
};
