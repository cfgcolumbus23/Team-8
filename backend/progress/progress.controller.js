
const { ProgressAccessor } = require("./progress.accessor");


class ProgressController {

    static async handlePostCompleted(req, res) {

        const { email }  = req.body;

        let data = await ProgressAccessor.postCompletedLessons(email);

        res.send(data);

    }

    static async handlePut(req, res) {

        console.log(req.body);

        const { email, lesson_id, score }  = req.body;

        await ProgressAccessor.put(email, lesson_id, score);

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