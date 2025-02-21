const favoritesModel = require('../models/favorites.model');  // Importación del modelo Product

const getFavoriteByUserId = async (req, res) => {
    const userId = req.params.userId
    try {
            
        let favoritos = await favoritesModel.getFavoriteByUserId(userId);
        
        res.status(200).json({ favoritos });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener el favorito: ' + err });
    }
};

const createFavorite = async (req, res) => {
    const newFavorite = req.body; 

    try {
        
        const response = await favoritesModel.createFavorite(newFavorite);

        res.status(201).json({ success: true, newFavorite: response });
    } catch (error) {
        console.error("Error al crear el favorito:", error);
        
        res.status(400).json({ success: false, message: "favorito ya existe" });
    }
};


const deleteFavoriteById = async (req, res) => {
    try {
        const favoriteId = req.params.id

        if (!favoriteId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un favorito' });
        }

        const result = await favoritesModel.deleteFavoriteById(favoriteId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún favorito con el ID: ${favoriteId}` });
        }

        res.status(200).json({ message: `Se ha borrado el favorito con ID: ${favoriteId}` });
    } catch (error) {
        console.error('Error al eliminar favorito:', error);
        res.status(500).json({ message: 'Error al eliminar el favorito' });
    }
};


module.exports = {
    getFavoriteByUserId,
    createFavorite,
    deleteFavoriteById,
}