const gamesModel = require('../models/games.model');  // Importación del modelo Product

const getGames = async (req, res) => {

    try {
            
        let games = await gamesModel.getAllGames();
        
        
        res.json({ juegos: games });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener los juegos: ' + err });
    }
};

const getGameById = async (req, res) => {
    const gameName = req.params.nombre
    try {
            
        let games = await gamesModel.getGameById(gameName);
        
        res.json({ juegos: games });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener el juego: ' + err });
    }
};

const createGame = async (req, res) => {
    const newGame = req.body; 

    try {
        
        const response = await gamesModel.createGame(newGame);

        
        res.status(201).json({ success: true, newGame: response });
    } catch (error) {
        console.error("Error al crear el juego:", error);

        
        res.status(400).json({ success: false, message: "Juego ya existe" });
    }
};


// //ACTUALIZAR
// const updateUser = async (req, res) => {
//     try {
//         const usuarioId = req.params.email

//         if (!usuarioId) {
//             return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
//         }

//         console.log(`Intentando borrar el usuario con email: ${usuarioId}`);

//         const result = await userModel.updateUser(usuarioId);

//         if (result.affectedRows === 0) {
//             return res.status(404).json({ message: `No se encontró ningún usuario con el ID: ${usuarioId}` });
//         }

//         res.status(200).json({ message: `Se ha borrado el usuario con ID: ${usuarioId}` });
//     } catch (error) {
//         console.error('Error al eliminar usuario:', error);
//         res.status(500).json({ message: 'Error al eliminar el usuario' });
//     }
// };

// //BORRAR
const deleteGameById = async (req, res) => {
    try {
        const GameId = req.params.nombre

        if (!GameId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un juego' });
        }

        console.log(`Intentando borrar el juego con ID: ${GameId}`);

        const result = await gamesModel.deleteGame(GameId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún juego con el ID: ${GameId}` });
        }

        res.status(200).json({ message: `Se ha borrado el juego con ID: ${GameId}` });
    } catch (error) {
        console.error('Error al eliminar juego:', error);
        res.status(500).json({ message: 'Error al eliminar el juego' });
    }
};


module.exports = {
    getGames,
    getGameById,
    createGame,
    deleteGameById,
    // updateUser,
}