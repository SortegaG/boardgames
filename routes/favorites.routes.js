const favController = require("../controllers/favorites.controller");
const router = require('express').Router();
const express = require('express');

router.get('/:userid', favController.getFavoriteByuserId);
// router.post('/', favController.createGame);
//router.delete('/', favController.deleteGame);


// router.put('/:email', GamesController.updateUser); // Sin terminar




module.exports = router;