const queries = require('../queries/user.queries') // Queries SQL
const pool = require('../config/db_pgsql')
//const bcrypt = require('bcryptjs');

// GET
const getUserById = async (id) => {
    try {
        const result = await pool.query(queries.getUserById, [id])
        return result
    } catch (err) {
        console.error('Error en el modelo getUserById:', err.message);
        throw err;
    }
}

// GET
const getAllUsers = async () => {
    try {
        const result = await pool.query(queries.getAllUsers)

        return result.rows;
    } catch (error) {
        console.error('Error en el modelo getAllUsers:', error.message);
        throw error;
    }
}




// CREATE
async function createUser({ nombre, apellidos, fecha_nacimiento, email, contraseña }) {
    try {
        const values = [nombre, apellidos, fecha_nacimiento, email, contraseña];
        const result = await pool.query(queries.createUser, values);
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
const updateUser = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateUser, [email])
        result = data.rows

    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteUser = async (usuarioId) => {
    try {
        const result = await client.query(queries.deleteUser, [usuarioId])
        return result
    } catch (err) {
        console.log(err);
        throw err;
    }
}

const users = {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}

module.exports = users;


