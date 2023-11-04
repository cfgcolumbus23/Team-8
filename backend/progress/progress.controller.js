
const { ProgressAccessor } = require("./progress.accessor");


class ProgressController {

    static async handlePostCompleted(req, res) {

        try {

      
    

        const { email }  = req.body;

        let data = await ProgressAccessor.postCompletedLessons(email);

        res.send(data);

        } catch (e) {
            res.status(500).send({ error: true});
        }
    }

    static async handlePut(req, res) {

        try {

     

        console.log(req.body);

        const { email, topic_id, lesson_id }  = req.body;

        await ProgressAccessor.put( email, topic_id, lesson_id );

        res.send({ success: true  });

        } catch (e) {
            res.status(500).send({ error: true});
        }
    }
    
}

module.exports = {
    ProgressController
}