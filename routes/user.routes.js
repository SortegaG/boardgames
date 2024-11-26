const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);
router.put('/:email', userController.updateUser); // Sin terminar
router.delete('/:id', userController.deleteUser);




module.exports = router;