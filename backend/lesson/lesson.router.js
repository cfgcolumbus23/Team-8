

const { Router } = require('express');
const { LessonController } = require('./lesson.controller');


let router = Router();

router.get('/all', LessonController.handleGetAll)

module.exports = {
    lessonRouter: router

}