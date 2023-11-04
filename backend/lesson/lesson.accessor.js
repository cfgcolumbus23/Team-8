
const { db } = require('../db');


const createLessonTable = `
    CREATE TABLE IF NOT EXISTS lesson (
        lesson_id INT,
        topic_id INT,
        lesson_name VARCHAR(40),
        lesson_data JSONB,
        PRIMARY KEY (topic_id, lesson_id)
    );
`;


class LessonAccessor {

    static async getAll() {

        await db.query(createLessonTable);
    
        let data = await db.query(`SELECT * from lesson;`);

        return data.rows;
    
    }

    static async put(body) {

        await db.query(createLessonTable);
    
        const { lesson_id, topic_id, lesson_name, lesson_data } = body;


        let data = await db.query(`INSERT into lesson (lesson_id, topic_id, lesson_name, lesson_data) VALUES ($1, $2, $3, $4) RETURNING lesson_id;`, [lesson_id, topic_id, lesson_name, lesson_data]);

        // console.log(data);

        return data.rows[0];

    }

    static async delete(topic_id, lesson_id) {

        await db.query(createLessonTable);
    

        try {
            await db.query(`DELETE FROM lesson WHERE (topic_id = $1 AND lesson_id = $2);`, [topic_id, lesson_id]);
            return true;
        } catch (e) {
            return false;
        }
   
        // console.log(data);

        // return t

    }



}


module.exports = {
    LessonAccessor
};