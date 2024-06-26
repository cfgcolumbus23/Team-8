const { Router } = require('express');
const { UserController } = require('./user.controller');
let router = Router();


router.put('/create', UserController.createUser);
router.put('/login', UserController.loginUser);
router.get('/all', UserController.getAll);
router.post('/login', UserController.postUser);

module.exports = {
  userRouter: router
};
