const express = require('express');
const users = require('../controllers/auth.controller');

const usersRouter = express.Router();
// const getAccessToken = require('../middleware/getAccessToken');
// const decodeToken = require('../middleware/decodeToken');
// const adminRoutes = require('../middleware/adminRoutes');


usersRouter.post('/login', users.login);
usersRouter.get('/logout', users.logout);
// usersRouter.get('/all', getAccessToken, decodeToken, adminRoutes, users.getAllUsers);


module.exports = usersRouter;