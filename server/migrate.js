const { Pool } = require('pg');

//const pool = require('./dbConn');

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'match',
    password: 'match',
    port: 5432,
});

pool.query(`DROP TABLE IF EXISTS moncard`)
    .then((data) => {
        console.log('Tables Dropped!');
        return pool.query(`CREATE TABLE IF NOT EXISTS moncard (
            id SERIAL PRIMARY KEY NOT NULL,
            mon_name VARCHAR(200) NOT NULL,
            mon_img text,
            descrip text,
            matchFound BOOLEAN,
            flipped BOOLEAN         
        )`);
    })
.then((data) => {
    console.log('monCard created!');
})
.catch((error) => {
    console.log('Error:', error)
})