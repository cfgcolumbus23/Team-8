
const { LessonAccessor } = require("./lesson.accessor");


class LessonController {

    static async handleGetAll(req, res) {

        let data = await LessonAccessor.getAll();

        res.send(data.rows);

    }

}

module.exports = {
    LessonController
}