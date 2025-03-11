const pool = require('../config/db_pgsql')
const queries = require('../queries/auth.queries') 
const bcrypt = require('bcrypt');



const login = async (email, contraseña) => {
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (result.rows.length === 0) {
            console.error('No se encontró ningún usuario con esas credenciales.');
            throw new Error('Email o contraseña incorrectos');
        }

        const user = result.rows[0];
        
        // Verifica el hash de la contraseña almacenada y la ingresada.
        console.log('Contraseña ingresada:', contraseña);
        console.log('Contraseña almacenada (hash):', user.contraseña);

        const isMatch = await bcrypt.compare(contraseña.trim(), user.contraseña.trim());

        console.log('¿Las contraseñas coinciden?', isMatch); // Muestra el resultado de la comparación

        if (!isMatch) {
            console.error('Contraseña incorrecta');
            throw new Error('Email o contraseña incorrectos');
        }

        return user; 
    } catch (error) {
        console.error('Error en el modelo login:', error.message);
        throw error;
    }
};


const userModels = {
    login,
}

module.exports = userModels;
