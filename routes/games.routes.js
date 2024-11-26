const GamesController = require("../controllers/games.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', GamesController.getGames);
router.get('/:id', GamesController.getGameById);
router.post('/', GamesController.createGame);
router.delete('/:id', GamesController.deleteGame);


// router.put('/:email', GamesController.updateUser); // Sin terminar




module.exports = router;