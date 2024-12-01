const pool = require('../config/db_pgsql')
const queries = require('../queries/user.queries') 


const login = async (email, contraseña) => {
    try {
        const result = await pool.query(queries.loginUser, [email, contraseña]);

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


const userModels = {
    login,
}

module.exports = userModels;
