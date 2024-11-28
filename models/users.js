const pool = require('../config/db_pgsql')


// Registro de un nuevo usuario
const signup = async (nombre, apellidos, fecha_nacimiento, email, contraseña, id_favorito = null) => {
    try {
        const query = `
            INSERT INTO users (nombre, apellidos, fecha_nacimiento, email, contraseña, id_favorito) 
            VALUES ($1, $2, $3, $4, $5, $6) 
            RETURNING *;
        `;
        const values = [nombre, apellidos, fecha_nacimiento, email, contraseña, id_favorito];
        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Error en signup:', error.message);
        throw error;
    }
};

// Inicio de sesión
const login = async (email, contraseña) => {
    try {
        const query = `
            SELECT * FROM users 
            WHERE email = $1 AND contraseña = $2;
        `;
        const values = [email, contraseña];
        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            console.error('No se encontró ningún usuario con esas credenciales.');
            throw new Error('Email o contraseña incorrectos');
        }

        return result.rows[0];
    } catch (error) {
        console.error('Error en el modelo login:', error.message);
        throw error;
    }
};


const getAllUsers = async () => {
    try {
        const query = `
            SELECT * FROM users;
        `;
        const result = await pool.query(query);
        return result.rows; // Devuelve todos los usuarios
    } catch (error) {
        console.error('Error en getAllUsers:', error.message);
        throw error;
    }
};

const userModels = {
    signup,
    login,
    getAllUsers,
};

module.exports = userModels;
