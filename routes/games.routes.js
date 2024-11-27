const GamesController = require("../controllers/games.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', GamesController.getGames);
router.get('/:nombre', GamesController.getGameByName);
router.post('/', GamesController.createGame);
router.delete('/:nombre', GamesController.deleteGame);


// router.put('/:email', GamesController.updateUser); // Sin terminar




module.exports = router;