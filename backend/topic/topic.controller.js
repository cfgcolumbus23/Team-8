
const { TopicAccessor } = require("./topic.accessor");

class TopicController {

    static async handleGetAll(req, res) {
        let data = await TopicAccessor.getAll();

        res.send(data);

    }

    static async handleUpdate(req, res) {


        let data = await TopicAccessor.updateTopicName(req.body.topic_id, req.body.topic_name);

        res.send(data);

    }

    static async handleAdd(req, res) {
        const topic = req.body;
        console.log("following is req.body");
        console.log(topic);
        try {
            const topic = req.body;
            const createdTopic = await TopicAccessor.addTopic(topic);
            res.json({ message: 'topic added successfully', data: createdTopic });
        } catch (error) {
            console.error('error adding topic:', error);
            res.status(500).json({ error: 'an error occurred' });
        }
    }


}

module.exports = {
    TopicController
}