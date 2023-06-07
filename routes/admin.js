const express = require("express");
const router = express.Router();
const { propertiesController } = require("../controller");

router.delete("/:id", propertiesController.deleteProperty);
router.put("/edit/:id", propertiesController.editProperty);
router.post("/properties", propertiesController.createProperty);

module.exports = router;
