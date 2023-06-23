const express = require("express");
const router = express.Router();
const { favoritesController } = require("../controller");
const { validateUser } = require("../middleware/auth");

router.post("/new-favorite", validateUser, favoritesController.createFavorite);
router.get("/all/:userId", validateUser, favoritesController.allFavorites);

module.exports = router;
