const express = require("express");
const router = express.Router();
const users = require("./users");
const properties = require("./properties");
const admin = require("./admin");
const visits = require("./visits");

router.use("/users", users);
router.use("/properties", properties);
router.use("/admin", admin);
router.use("/visits", visits);

module.exports = router;
