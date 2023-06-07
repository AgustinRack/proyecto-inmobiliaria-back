const express = require("express");
const router = express.Router();
const { Properties } = require("../models");
const { propertiesController } = require("../controller");

router.get("/all", propertiesController.allProperties);

router.get("/for-rent", propertiesController.getPropertiesForRent);
router.get("/for-sale", propertiesController.getPropertiesForSale);

module.exports = router;
