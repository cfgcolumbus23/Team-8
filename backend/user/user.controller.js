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

    static async loginUser(req, res) {
        try {
          const user = req.body;
          const loggedInUser = await UserAccessor.loginUser(user);
      
          // check if the login was successful (user found)
          if (loggedInUser) {
            // successful login -> redirect to the dashboard
            res.redirect('/dashboard');
          } else {
            // unsuccessful login (user not found) -> redirect to the login page
            res.redirect('/login');
          }
        } catch (error) {
          console.error('error during login:', error);
          res.status(500).json({ error: 'an error occurred' });
        }
      }


    static async postUser(req, res) {
      try {
        const user = req.body;
        const loggedInUser = await UserAccessor.getUser(user);
    
        // check if the login was successful (user found)
        if (loggedInUser) {
          // successful login -> redirect to the dashboard
          res.send(loggedInUser);
        } else {
          // unsuccessful login (user not found) -> redirect to the login page
          // res.redirect('/login');
          res.send({ error: true });
        }
      } catch (error) {
        console.error('error during login:', error);
        res.status(500).json({ error: 'an error occurred' });
      }
    }
      
}

module.exports = {
  UserController,
};
