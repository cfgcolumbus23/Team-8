
const { db } = require('../db');


const createLessonTable = `
    CREATE TABLE IF NOT EXISTS lesson (
        lesson_id SERIAL PRIMARY KEY,
        lesson_name VARCHAR(40),
        lesson_data JSONB
    );
`;


class LessonAccessor {

    static async getAll() {

        await db.query(createLessonTable);
    
        let data = await db.query(`SELECT * from lesson;`);

        return data.rows;
    
    }

    static async put(name, body) {

        await db.query(createLessonTable);
    
        let data = await db.query(`INSERT into lesson (lesson_name, lesson_data) VALUES ($1, $2) RETURNING lesson_id;`, [name, body]);

        // console.log(data);

        return data.rows[0];

    }

    static async delete(id) {

        await db.query(createLessonTable);
    

        try {
            await db.query(`DELETE FROM lesson WHERE lesson_id = $1;`, [id]);
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