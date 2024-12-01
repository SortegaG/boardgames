const favController = require("../controllers/favorites.controller");
const router = require('express').Router();

router.get('/:userId', favController.getFavoriteByUserId);
router.post('/', favController.createFavorite);
router.delete('/:id', favController.deleteFavoriteById);

module.exports = router;