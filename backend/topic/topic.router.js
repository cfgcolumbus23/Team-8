const { Router } = require('express');
const { TopicController } = require('./topic.controller');

let router = Router();

router.get('/all', TopicController.handleGetAll)

//router.put('/all', TopicController.handleAdd)

//router.put('/all', TopicController.handleUpdate)


module.exports = {
    topicRouter: router
}
