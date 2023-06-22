const express = require("express");
const router = express.Router();
const users = require("./users");
const properties = require("./properties");
const admin = require("./admin");
const visits = require("./visits");
const favorites = require("./favorites");

router.use("/users", users);
router.use("/properties", properties);
router.use("/admin", admin);
router.use("/visits", visits);
router.use("/favorites", favorites);

module.exports = router;
