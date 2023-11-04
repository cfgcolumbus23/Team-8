
const { LessonAccessor } = require("./lesson.accessor");


class LessonController {

    static async handleGetAll(req, res) {

        let data = await LessonAccessor.getAll();

        res.send(data);

    }

    static async handlePut(req, res) {

        await LessonAccessor.put();

        // res.send(data.rows);

        console.log(req.body);

        const { name, body } = req.body;

        let result = await LessonAccessor.put(name, body);

        res.send(result);

    }

    static async handleDelete(req, res) {

        const { lesson_id } = req.body;

        if (await LessonAccessor.delete(lesson_id)) {
            res.send({ success: true });
            return;
        }

        res.send({ success: false });

    }


}

module.exports = {
    LessonController
}