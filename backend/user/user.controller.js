const { UserAccessor } = require('./user.accessor');

class UserController {
    static async createUser(req, res) {
        try {
            // take in user info as a JSON body
            const user = req.body;
            const createdUser = await UserAccessor.createUser(user);
            res.json({ message: 'user added successfully', data: createdUser });
        } catch (error) {
            console.error('error adding user:', error);
            res.status(500).json({ error: 'an error occurred' });
        }
    }
}

module.exports = {
  UserController,
};
