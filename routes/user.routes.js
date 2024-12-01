const userController = require("../controllers/user.controller");
const router = require('express').Router();



router.post('/', userController.createUser);
// router.put('/:id', userController.updateUser); // Sin terminar
router.delete('/:id', userController.deleteUser);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUserById);


//////




module.exports = router;