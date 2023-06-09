const express = require("express");
const router = express.Router();
const { validateUser } = require("../middleware/auth");
const { usersController } = require("../controller");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.post("/logout", validateUser, usersController.logout);
router.post("/send-reminder/:email", validateUser, usersController.sendEmail);
router.get("/secret", validateUser, usersController.secret);
router.put("/edit", validateUser, usersController.editUser);

module.exports = router;
