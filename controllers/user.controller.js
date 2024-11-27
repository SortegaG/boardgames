const userModel = require('../models/user.model');  // Importación del modelo Product

const getUsers = async (req, res) => {
    let users;

    try {

        if (req.query.email) {
            
            users = await userModel.getUserByEmail(req.query.email);
        } else {
            
            users = await userModel.getAllUsers();
        }

        
        res.json({ usuarios: users });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
    }
};

const getUserByEmail = async (req, res) => {
    try {
        const usuarioEmail = req.params.email

        if (!usuarioEmail) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
        }
        const result = await userModel.getUserByEmail(usuarioEmail);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún usuario con el email: ${usuarioEmail}` });
        }

        res.status(200).json({ usuario: result });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};


const createUser = async (req, res) => {
    const newUser = req.body; 

    try {
        
        const response = await userModel.createUser(newUser);

        
        res.status(201).json({ success: true, newUser: response });
    } catch (error) {
        console.error("Error al crear el usuario:", error);

        
        res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
};


//ACTUALIZAR
const updateUser = async (req, res) => {
    try {
        const usuarioId = req.params.email

        if (!usuarioId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
        }

        console.log(`Intentando borrar el usuario con email: ${usuarioId}`);

        const result = await userModel.updateUser(usuarioId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún usuario con el ID: ${usuarioId}` });
        }

        res.status(200).json({ message: `Se ha borrado el usuario con ID: ${usuarioId}` });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};

//BORRAR
const deleteUser = async (req, res) => {
    try {
        const usuarioId = req.params.email

        if (!usuarioId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
        }

        console.log(`Intentando borrar el usuario con ID: ${usuarioId}`);

        const result = await userModel.deleteUser(usuarioId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún usuario con el ID: ${usuarioId}` });
        }

        res.status(200).json({ message: `Se ha borrado el usuario con ID: ${usuarioId}` });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};


module.exports = {
    getUsers,
    createUser,
    deleteUser,
    updateUser,
    getUserByEmail
}