const express = require("express");
const router = express.Router();
const { visitsController } = require("../controller");
const { validateUser } = require("../middleware/auth");

router.post("/appointment/save", validateUser, visitsController.saveVisit);
router.get(
  "/appointment/:id",
  validateUser,
  visitsController.getPropertyVisits
);
router.get(
  "/appointment/user/:id",
  validateUser,
  visitsController.getUserVisits
);

module.exports = router;
