const { Router } = require('express');
const { TopicController } = require('./topic.controller');

let router = Router();





router.get('/all', TopicController.handleGetAll)
router.put('/info', TopicController.handleAdd);




module.exports = {
    topicRouter: router
}
