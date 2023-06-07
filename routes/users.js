const express = require("express");
const router = express.Router();
const validateUser = require("../middleware/auth");
const { usersController } = require("../controller");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.get("/secret", validateUser, usersController.secret);
router.put("/edit", usersController.editUser);
router.post("/logout", usersController.logout);

module.exports = router;
