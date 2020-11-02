const app = require('express')()
const cors = require('cors')
const { fetchAllPeople } = require('./src/scripts/fetchAllPeople')
const knex = require('./src/db/knex.js')
require('dotenv').config()

app.use(cors())

app.get('/', (req, res)=>{
    // getting all names to deliver them to front-end
    knex.select('name').from('characters').then((data)=>{
        res.send(data);
    }).catch((err) =>{
        throw err;
    })
})

exports.app = app;

if (process.env.NODE_ENV !== "test"){
    app.listen(process.env.PORT, () => {

        console.log('initiating start')
        
        // rollbacks and migrations
        knex.migrate.rollback().then(()=>{
          console.log('rollback is successful')
          knex.migrate.latest().then(()=>{
            console.log('migration is successful')
          }).catch((err) =>{
            throw err;
        })

        // fetching characters from swapi
          fetchAllPeople().then(async (data) => {
            console.log('fetch is done');

            // putting them into database
            for(const character of data){
              await knex.insert({
                homeworld : character.homeworld,
                name : character.name,
                gender : character.gender,
              }).into('characters').catch((err) =>{
                throw err;
            });
            }

            console.log(`Server has been initiated on ${process.env.PORT}`);
          }).catch((err)=>{
            throw err;
          });
        })
    })
}