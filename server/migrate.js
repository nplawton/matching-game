const { Pool } = require('pg');

const pool = require('./dbConn');

pool.query(`DROP TABLE IF EXISTS moncard`)
    .then((data) => {
        console.log('Tables Dropped!');
        return pool.query(`CREATE TABLE IF NOT EXISTS moncard (
            id SERIAL PRIMARY KEY NOT NULL,
            mon_name VARCHAR(200) NOT NULL,
            mon_img text,
            descrip text,
            matchFound VARCHAR(10)          
        )`);
    })
.then((data) => {
    console.log('monCard created!');
})
.catch((error) => {
    console.log('Error:', error)
})