const userModel = require('../models/user.model'); 
const bcrypt = require("bcrypt");


const getUsers = async (req, res) => {
    let users;

    try {

        users = await userModel.getAllUsers();

        res.json({ usuarios: users });
    } catch (err) {
        
        res.status(500).json({ error: 'Error al obtener los usuarios: ' + err });
    }
};

const getUserById = async (req, res) => {
    try {
        const usuarioId = req.params.id

        if (!usuarioId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
        }
        const result = await userModel.getUserById(usuarioId);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: `No se encontró ningún usuario con el id: ${usuarioId}` });
        }

        res.status(200).json({ usuario: result.rows[0] });
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
    }
};


const createUser = async (req, res) => {
    const newUser = req.body;

    try {

        if (!newUser.contraseña) {
            return res.status(400).json({ success: false, message: "La contraseña es obligatoria." });
        }

        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(newUser.contraseña, saltRounds);

        newUser.contraseña = hashedPassword;

        const response = await userModel.createUser(newUser);

        res.status(201).json({ success: true, newUser: response });

    } catch (error) {
        console.error("Error al crear el usuario:", error);

        res.status(400).json({ success: false, message: "Usuario ya existe" });
    }
};

//ACTUALIZAR
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

//BORRAR
const deleteUser = async (req, res) => {
    try {
        const usuarioId = req.params.id

        if (!usuarioId) {
            return res.status(400).json({ message: 'Se requiere un ID para eliminar un usuario' });
        }

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
    // updateUser,
    getUserById
}