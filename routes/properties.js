const express = require("express");
const router = express.Router();
const { Properties } = require("../models");
const { propertiesController } = require("../controller");

router.get("/all", propertiesController.allProperties);
router.delete("/admin/:id", propertiesController.deleteProperty);
router.put("/mod/:id", propertiesController.modProperty);

module.exports = router;
