

const { Router } = require('express');
const { LessonController } = require('./lesson.controller');


let router = Router();

router.get('/all', LessonController.handleGetAll)
router.put('/info', LessonController.handlePut)
router.delete('/info', LessonController.handleDelete)

module.exports = {
    lessonRouter: router
}