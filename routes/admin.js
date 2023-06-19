const express = require("express");
const router = express.Router();
const {
  propertiesController,
  usersController,
  visitsController,
} = require("../controller");

router.delete("/property/:id", propertiesController.deleteProperty);
router.put("/property/edit", propertiesController.editProperty);
router.post("/new-property", propertiesController.createProperty);
router.get("/visits", visitsController.getAllVisits);
// router.put("/user/:id", usersController.toggleAdmin)

module.exports = router;
