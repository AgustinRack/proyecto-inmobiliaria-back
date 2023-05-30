const express = require("express");
const router = express.Router();
const { usersController } = require("../controller");

// router.get("/signup", usersController.signup);
router.get("/", (req, res) => {
  res.send("hola");
});

module.exports = router;
