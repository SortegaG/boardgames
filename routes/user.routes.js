const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', userController.getUsers);
router.get('/:email', userController.getUserByEmail);
router.post('/', userController.createUser);
router.put('/:email', userController.updateUser); // Sin terminar
router.delete('/:email', userController.deleteUser);
//////




module.exports = router;