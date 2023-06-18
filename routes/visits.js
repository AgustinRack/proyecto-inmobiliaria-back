const express = require("express");
const router = express.Router();
const { visitsController } = require("../controller");

router.post("/appointment/save", visitsController.saveVisit);
router.get("/appointment/:id", visitsController.getPropertyVisits);
router.get("/appointment/user/:id", visitsController.getUserVisits);

module.exports = router;
