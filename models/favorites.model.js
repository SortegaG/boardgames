const queries = require('../queries/favorites.queries') // Queries SQL
const pool = require('../config/db_pgsql')
//const bcrypt = require('bcryptjs');

// GET
const getFavoriteById = async (favoriteId) => {
    console.log();

    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getFavoriteById, [favoriteId])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// // GET
// const getAllGames = async () => {
//     let client, result;
//     try {
//         client = await pool.connect();
//         const data = await client.query(queries.getAllGames)
//         result = data.rows
//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }




// // CREATE
// async function createGame ({ nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max }) {
//     try {
//         const values = [nombre, descripcion, categoria, edad_recomendada, jugadores_min, jugadores_max];
//         const result = await pool.query(queries.createGame, values);
//         return result.data

//     } catch (err) {
//         console.error("Error ejecutando createUser:", err);
//         throw err; // 
//     }
// }

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

// // // DELETE
// const deleteGame = async (GameId) => {
//     let client, result;
//     try {
//         client = await pool.connect(); // Espera a abrir conexion
//         const data = await client.query(queries.deleteGame, [GameId])
//         result = data.rows

//     } catch (err) {
//         console.log(err);
//         throw err;
//     } finally {
//         client.release();
//     }
//     return result
// }

const users = {
    getFavoriteById,
    // getAllGames,
    // createGame,
    // updateUser,
    // deleteGame
}

module.exports = users;


