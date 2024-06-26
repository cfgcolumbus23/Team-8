

const { Router } = require('express');
const { ProgressController } = require('./progress.controller');


let router = Router();

router.post('/completed', ProgressController.handlePostCompleted)
router.put('/lesson', ProgressController.handlePut)
router.get('/all', ProgressController.handleGetAll)

// router.delete('/info', ProgressController.handleDelete)

module.exports = {
    progressRouter: router
}