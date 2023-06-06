const express = require("express");
const router = express.Router();
const { Properties } = require("../models");
const { propertiesController } = require("../controller");

router.get("/all", propertiesController.allProperties);

module.exports = router;
