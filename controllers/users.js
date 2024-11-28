const usersModels = require('../models/users');
const { createToken } = require('../config/jsonWebToken');


const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        console.log("****", role);
        const newUser = await usersModels.signup(email, password, role)
        res.status(201).json({ msg: "Signed Up" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};



const login = async (req, res) => {
    try {
        console.log('Datos recibidos en el backend:', req.body);

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: 'Email y contraseña son requeridos' });
        }

        const user = await usersModels.login(email, password);

        if (user) {
            const token = createToken({ email: user.email, role: user.role });

            res.cookie('access_token', token, {
                httpOnly: true,
                maxAge: 10 * 60 * 1000, // Expira en 10 minutos
            });

            res.status(200).json({ role: user.role });
        } else {
            res.status(400).json({ msg: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error('Error en el controlador login:', error.message);
        res.status(500).json({ msg: 'Error en el inicio de sesión' });
    }
};



const logout = async (req, res) => {
    try {
        res.status(200)
            .set('Authorization', "")
            .cookie('access_token', "")
            .send();
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};


const getAllUsers = async (req, res) => {
    try {
        const users = await usersModels.getAllUsers();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}




const users = {
    signup,
    login,
    logout,
    getAllUsers
};


module.exports = users;