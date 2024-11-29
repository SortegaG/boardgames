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
        const { email, password } = req.body;
        const user = await usersModels.login(email, password);

        if (user) {
            const token = createToken({ email: user.email, role: user.role });

            res.cookie("token", token, {
                httpOnly: false,
                sameSite: "Lax", 
            })
            .status(200)
            .json({ success: true, role: user.role });
        } else {
            res.status(400).json({ success: false, msg: "Credenciales incorrectas" });
        }
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
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