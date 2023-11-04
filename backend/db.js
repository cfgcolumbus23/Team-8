const pg = require('pg');
const { Client } = pg;

// import { Client} from "pg";

const db = new Client({
    user: "",
    host: "localhost",
    database: "postgres",
    password: "",
    port: 5432
});






// setUpTables = async () => {
//     await db.query(createLessonTable);
// };


module.exports = {
    db,
    // setUpTables
}

