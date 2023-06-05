const { Properties, Categories } = require("../models");
const sequelize = require("sequelize");

async function seedProperties() {
  try {
    const categoriesData = [
      {
        categoryName: "departamento",
      },
      { categoryName: "PH" },
      { categoryName: "casa" },
      { categoryName: "local" },
      { categoryName: "terreno" },
    ];

    await Categories.bulkCreate(categoriesData);

    const propertiesData = [
      {
        type: 1,
        price: 100000,
        country: "País 1",
        neighborhood: "Vecindario 1",
        address: "Dirección 1",
        size: 100,
        bedrooms: 2,
        bathrooms: 1,
        description: "Descripción 1",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
        imgs: [
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
        ],
        categoryId: 1,
      },
      {
        type: 2,
        price: 455500,
        country: "Argenzuela",
        neighborhood: "Veci 2",
        address: "direc 2",
        size: 322,
        bedrooms: 3,
        bathrooms: 2,
        description: "Descripción 3",
        img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
        imgs: [
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
          "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/140-11-40ba192d4a5d6fa5b616775073386812-640-0.webp---https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/1391-3ab00a842d73512bcc16775073405150-640-0.webp",
        ],
        categoryId: 3,
      },
    ];

    await Properties.bulkCreate(propertiesData);

    console.log("Productos sembrados exitosamente");
  } catch (error) {
    console.error("Error al sembrar los datos de productos:", error);
  }
}

seedProperties();
