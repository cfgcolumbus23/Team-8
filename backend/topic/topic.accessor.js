const { db } = require('../db');

// db.connect();

const createTopicTable = `
    CREATE TABLE IF NOT EXISTS topic (
        topic_id INT PRIMARY KEY,
        topic_name TEXT
    );

`;

class TopicAccessor {

    static async getAll() {
        await db.query(createTopicTable);
        let result = await db.query(`SELECT * FROM topic;`);
        return result.rows;
    }

    static async addTopic(topicName) {
        try {
            const { topic_id, topic_name } = topicName;
            
            const insertQuery = `
                INSERT INTO topic (topic_id, topic_name)
                VALUES ($1, $2);
                `;

            const values = [topic_id, topic_name];
            const result = await db.query(insertQuery, values);

            return result.rows[0];
            } catch (error) {
                throw error;
            }
    }


    

    static async updateTopicName(topicId, newTopicName) {
        const updateQuery = `
            UPDATE topic
            SET topic_name = $2
            WHERE topic_id = $1
            RETURNING *;
        `;
        const values = [topicId, newTopicName];
        try {
            const result = await db.query(updateQuery, values);
            console.log(`Topic updated:`, result.rows[0]);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating topic name:', error);
            return { error: true };
        }
    }
    
}

module.exports = {
    TopicAccessor
};