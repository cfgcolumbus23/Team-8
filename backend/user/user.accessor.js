const { db } = require('../db');

class UserAccessor {
    static async createUser(user) {
        try {
            const { firstname, lastname, email } = user;
            
            // insert data into the user_info table
            const insertQuery = `
                INSERT INTO user_info (firstname, lastname, email, is_admin)
                VALUES ($1, $2, $3, $4);
                `;

            const values = [firstname, lastname, email, 0];
            const result = await db.query(insertQuery, values);

            return result.rows[0];
            } catch (error) {
                throw error;
            }
    }
}

module.exports = {
  UserAccessor
};
