const express = require("express");
const router = express.Router();
const { propertiesController, usersController } = require("../controller");

router.delete("/:id", propertiesController.deleteProperty);
router.put("/edit/:id", propertiesController.editProperty);

// router.put("/user/:id", usersController.toggleAdmin)

module.exports = router;
