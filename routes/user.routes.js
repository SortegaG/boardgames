const userController = require("../controllers/user.controller");
const router = require('express').Router();
const express = require('express');

router.get('/', userController.getUsers);


module.exports = router;