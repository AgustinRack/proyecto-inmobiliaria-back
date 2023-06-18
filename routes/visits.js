const express = require("express");
const router = express.Router();
const { visitsController } = require("../controller");

router.post("/appointment/save", visitsController.saveVisit);
router.get("/appointment/:id", visitsController.getPropertyVisits);

module.exports = router;
