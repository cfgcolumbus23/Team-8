
const { ProgressAccessor } = require("./progress.accessor");


class ProgressController {

    static async handlePostCompleted(req, res) {

        const { email }  = req.body;

        let data = await ProgressAccessor.postCompletedLessons(email);

        res.send(data);

    }

    static async handlePut(req, res) {

        console.log(req.body);

        const { email, topic_id, lesson_id }  = req.body;

        await ProgressAccessor.put( email, topic_id, lesson_id );

        res.send({ success: true  });

    }
    
}

module.exports = {
    ProgressController
}