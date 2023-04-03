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

app.get('/moncard/:id', (req, res, next) => {
    
    const id = req.params.id;

    console.log(id);

    pool.query(`SELECT id, mon_name, mon_img, descrip FROM moncard WHERE id = $1`, 
        [id], (err, res) => {

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

app.post('/moncard', (req, res, next) => {

    const { mon_name, mon_img, descrip, matchFound, flipped } = req.body;

    if (mon_name && mon_img && descrip && matchFound && flipped){
        pool.query(`INSERT INTO moncard (mon_name, mon_img, descrip, matchFound, 
            flipped) VALUES ($1, $2, $3, $4, $5) RETURNING *`, 
            [mon_name, mon_img, descrip, matchFound, flipped], (err, data) => {

                const newCreture = data.rows[0];
                console.log('Creature Created: ', newCreture);

                if(newCreture){
                    return res.send(newCreture);
                }else{
                    return next(err);
                }

        });
    }else{
        return res.status(400).send('Creature entry information missing. Please update and try again');
    }

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