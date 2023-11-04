
const { ProgressAccessor } = require("./progress.accessor");


class ProgressController {

    static async handleGetCompleted(req, res) {

        const { email }  = req.body;

        let data = await ProgressAccessor.getCompletedLessons(email);

        res.send(data);

    }

    static async handlePut(req, res) {

        const { email, lesson_id, score }  = req.body;


        await ProgressAccessor.put(email, lesson_id, score);

        const { name, body } = req.body;

        let result = await ProgressAccessor.put(name, body);

        res.send(result);

    }

    // static async handleDelete(req, res) {

    //     const { lesson_id } = req.body;

    //     if (await LessonAccessor.delete(lesson_id)) {
    //         res.send({ success: true });
    //         return;
    //     }

    //     res.send({ success: false });

    // }


}

module.exports = {
    ProgressController
}