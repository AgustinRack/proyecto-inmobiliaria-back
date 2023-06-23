const express = require("express");
const router = express.Router();
const {
  propertiesController,
  usersController,
  visitsController,
} = require("../controller");
const { validateUser } = require("../middleware/auth");
const { isAdmin } = require("../middleware/auth");

router.delete(
  "/property/:id",
  validateUser,
  isAdmin,
  propertiesController.deleteProperty
);
router.put(
  "/property/edit",
  validateUser,
  isAdmin,
  propertiesController.editProperty
);
router.post(
  "/new-property",
  validateUser,
  isAdmin,
  propertiesController.createProperty
);
router.get("/visits", validateUser, isAdmin, visitsController.getAllVisits);
router.get("/all-users", validateUser, isAdmin, usersController.allUsers);

module.exports = router;
