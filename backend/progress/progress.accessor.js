
const { db } = require('../db');


const createProgressTable = `
    CREATE TABLE IF NOT EXISTS progress (
        email VARCHAR(50),
        lesson_id INT,
        score INT,
        PRIMARY KEY (email, lesson_id)
    );
`;


class ProgressAccessor {

    static async getCompletedLessons(email) {

        await db.query(createProgressTable);
    
        
        let data = await db.query(`SELECT * from progress where email = '$1';`, [email]);

        return data.rows;
    
    }

    static async put(email, lesson_id, score) {

        await db.query(createProgressTable);
    
        let data = await db.query(`INSERT into progress (email, lesson_id, score) VALUES ($1, $2,) RETURNING lesson_id;`, [email, lesson_id, score]);

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