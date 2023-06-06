const express = require("express");
const router = express.Router();
const { Properties } = require("../models");
const { propertiesControllers } = require("../controller");

router.get("/all", propertiesControllers.allProperties);

module.exports = router;
