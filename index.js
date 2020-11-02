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
        console.log(`Server has been initiated on ${process.env.PORT}`);
    })
}