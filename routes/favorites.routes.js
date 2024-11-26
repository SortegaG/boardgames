const favController = require("../controllers/favorites.controller");
const router = require('express').Router();
const express = require('express');

router.get('/:email', favController.getFavoriteById);
// router.post('/', favController.createGame);
// router.delete('/:id', favController.deleteGame);


// router.put('/:email', GamesController.updateUser); // Sin terminar




module.exports = router;