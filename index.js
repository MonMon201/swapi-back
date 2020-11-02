const app = require('express')()
const cors = require('cors')
require('dotenv').config()

app.use(cors())

app.get('/', (req, res)=>{
    res.send({
        homeworld: "Tatooine",
        name: "Luke Skywalker",
        gender: "male",
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
              }).into('characters');
            }
            
            console.log(`Server has been initiated on ${process.env.PORT}`);
          }).catch((err)=>{
            throw err;
          });
        })
    })
}