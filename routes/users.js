const express = require("express");
const router = express.Router();
const validateUser = require("../middleware/auth");
const { usersController } = require("../controller");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);
router.get("/secret", validateUser, usersController.secret);
router.put("/edit", usersController.editUser);
router.put("/edit/name", usersController.editUserName);
router.put("/edit/last-name", usersController.editUserLastName);
router.put("/edit/email", usersController.editUserEmail);
router.put("/edit/phone-number", usersController.editUserPhoneNumber);

module.exports = router;
