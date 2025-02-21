const queries = require('../queries/favorites.queries') // Queries SQL
const pool = require('../config/db_pgsql')

// GET
const getFavoriteByUserId = async (userId) => {
    try {
        const result = await pool.query(queries.getFavoriteByUserId, [userId])
        return result.rows

    } catch (err) {
        console.log(err);
        throw err;
    }
}

// // CREATE
async function createFavorite ({ id_usuario, id_juego }) {
    try {
        const values = [id_usuario, id_juego];
        const result = await pool.query(queries.createFavorite, values);
        return result.data

    } catch (err) {
        console.error("Error ejecutando createUser:", err);
        throw err; // 
    }
}

const deleteFavoriteById = async (favoriteId) => {
    try {
        const result = await pool.query(queries.deleteFavoriteById, [favoriteId])
        return result.rows
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const users = {
    getFavoriteByUserId,
    // getAllGames,
    createFavorite,
    // updateUser,
    deleteFavoriteById
}

module.exports = users;


