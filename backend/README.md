The backend of this project uses an accessor, controller, router framework.  For example,
backend/user
	/user.accessor.js - logic for communicating with the database directly for calls related to the users table like creating user, logging in user, etc.
	/user.controller.js - logic for the different methods like creating user, logging in, and directing the program with what to do with the information returned from the database
	/user.router.js - collects the actual HTTP routes for requests that will be made to the database in the accessor

 index.js & db.js include files for setting up Express.js and PostgreSQL connections.
