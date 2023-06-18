const express = require("express");
const router = express.Router();
const {
  propertiesController,
  usersController,
  visitsController,
} = require("../controller");

router.delete("/:id", propertiesController.deleteProperty);
router.put("/property/edit", propertiesController.editProperty);
router.post("/property/:id", propertiesController.createProperty);
router.get("/visits", visitsController.getAllVisits);
// router.put("/user/:id", usersController.toggleAdmin)

module.exports = router;
