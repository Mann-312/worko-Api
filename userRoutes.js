const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { validateUser } = require('../middlewares/validator');

router.get('/', userController.listUsers);
router.get('/:userId', userController.getUser);
router.post('/', validateUser, userController.createUser);
router.put('/:userId', validateUser, userController.updateUser);
router.patch('/:userId', validateUser, userController.partialUpdateUser);
router.delete('/:userId', userController.deleteUser);

module.exports = router;
