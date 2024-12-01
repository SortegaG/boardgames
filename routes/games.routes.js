const gamesController = require("../controllers/games.controller");
const router = require('express').Router();

router.get('/', gamesController.getGames);
router.get('/:id', gamesController.getGameById);
router.post('/', gamesController.createGame);
router.delete('/:id', gamesController.deleteGameById);


// router.put('/:email', gamesController.updateUser); // Sin terminar




module.exports = router;