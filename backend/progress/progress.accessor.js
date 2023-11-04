
const { db } = require('../db');


const createProgressTable = `
    CREATE TABLE IF NOT EXISTS progress (
        email VARCHAR(50),
        topic_id INT,
        lesson_id INT,
        PRIMARY KEY (email, topic_id, lesson_id)
    );
`;


class ProgressAccessor {

    static async postCompletedLessons(email) {

        await db.query(createProgressTable);
    
        
        let data = await db.query(`SELECT * from progress where email = $1;`, [email]);

        return data.rows;
    
    }

    static async put(email, topic_id, lesson_id) {

        await db.query(createProgressTable);
    
        let data = await db.query(`INSERT into progress (email, topic_id, lesson_id) VALUES ($1, $2, $3) RETURNING lesson_id;`, [email, topic_id, lesson_id]);

        return data.rows[0];

    }

    // static async delete(id) {

    //     await db.query(createLessonTable);
    
    //     try {
    //         await db.query(`DELETE FROM lesson WHERE lesson_id = $1;`, [id]);
    //         return true;
    //     } catch (e) {
    //         return false;
    //     }
   
    //     // console.log(data);

    //     // return t

    // }



}


module.exports = {
    ProgressAccessor
};