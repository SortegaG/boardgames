const queries = require('../queries/games.queries') // Queries SQL
const pool = require('../config/db_pgsql')
//const bcrypt = require('bcryptjs');

// GET
const getGameById = async (id) => {
    try {
        const result = await pool.query(queries.getGameById, [id])
        
        if (result.rowCount === 0) {
            throw new Error("No hay ningun juego con este id: ", id)
        }

        return result.rows[0]
    } catch (err) {
        console.log(err);
        throw err;
    }
}

// GET
const getAllGames = async () => {
    try {
        const result = await pool.query(queries.getAllGames)
        return result.rows
    } catch (err) {
        console.log(err);
        throw err;
    }
}




// CREATE
async function createGame ({ nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max }) {
    try {
        const values = [nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max];
        const result = await pool.query(queries.createGame, values);
        return result.data

    } catch (err) {
        console.error("Error ejecutando createUser:", err);
        throw err; // 
    }
}

// {
//     "nombre": "Damian",
//     "apellidos": "Orellana",
//     "email": "damian@gmail.com",
//     "password": "123456",
//     "rol": "user"
// }

//UPDATE
// const updateUser = async (email) => {
//     let client, result;
//     try {
//         client = await pool.connect(); // Espera a abrir conexion
//         const data = await client.query(queries.updateUser, [email])
//         result = data.rows

//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }

// // DELETE
const deleteGame = async (GameId) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteGame, [GameId])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users = {
    getGameById,
    getAllGames,
    createGame,
    // updateUser,
    deleteGame
}

module.exports = users;


