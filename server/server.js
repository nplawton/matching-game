'use strict';

//Establish all dependicies for the project
const { Pool } = require('pg');
const ex = require ('express');
const cors = require('cors');
const body = require('body-parser');

//port that express will listean to for requests
const port = process.env.port || 8000;

//using dependcies
const app = ex();
app.use(body.json());
app.use(cors());

const pool = require('./dbConn');

app.get('/moncard', (req, res, next) => {
    pool.query('SELECT * FROM moncard', (err, results) => {
        if (err){
            return next(err);
        }

        let row = results.rows;
        console.log(row);
        res.send(row);

    });
});

app.get('/moncard/:mon_name', (req, res, next) => {
    
    const name = req.params.mon_name;

    console.log(name);

    pool.query(`SELECT id, mon_name, mon,img, descrip FROM moncard WHERE name = $1`, 
        [name], (err, res) => {

            if(err){
                return next(err);
            }

            const creature = results.rows[0];
            console.log('Single creature found: ', creature);

            if(creature){
                returnres.send(creature);
            }else{
                return res.status(404).send('No creature was found');
            }

        }) 

});

//Port Listeaning
app.listen(port, () => {
    console.log(`listening on ${port}`);
    console.log('connecting to postgres pool:', pool);
});


app.use((err, req, res, next) => {
    //console.error('We\'re not here right now');
    console.error(err.slack);
    req.status(400).send('We\'re not here right now');
});

module.exports = app;