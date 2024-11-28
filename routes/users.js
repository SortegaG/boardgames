const express = require('express');
const usersRouter = express.Router();
const users = require('../controllers/users');
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');


usersRouter.post('/signup', users.signup);
usersRouter.post('/login', users.login);
usersRouter.get('/logout', users.logout);
usersRouter.get('/all', getAccessToken, decodeToken, adminRoutes, users.getAllUsers);


module.exports = usersRouter;