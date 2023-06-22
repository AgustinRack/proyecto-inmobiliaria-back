const express = require("express");
const router = express.Router();
const { favoritesController } = require("../controller");

router.post("/new-favorite", favoritesController.createFavorite);
router.get("/all/:userId", favoritesController.allFavorites);

module.exports = router;
