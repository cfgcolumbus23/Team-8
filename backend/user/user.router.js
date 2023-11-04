const { Router } = require('express');
const { UserController } = require('./user.controller');
let router = Router();

router.put('/create', UserController.createUser)

module.exports = {
    userRouter: router
}
