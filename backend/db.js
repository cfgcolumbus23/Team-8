const pg = require('pg');
const { Client } = pg;

const db = new Client({
    user: "",
    host: "localhost",
    database: "postgres",
    password: "",
    port: 5432
});

module.exports = {
    db: db
}

