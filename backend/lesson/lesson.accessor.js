
const { db } = require('../db');


const createLessonTable = `
    CREATE TABLE IF NOT EXISTS lesson (
        lesson_id INT PRIMARY KEY,
        lesson_data JSONB
    );
`;


class LessonAccessor {

    static async getAll() {

        await db.query(createLessonTable);
    
        let data = await db.query(`SELECT * from lesson;`);

        return data.rows;
    
    }
    
}


module.exports = {
    LessonAccessor
};