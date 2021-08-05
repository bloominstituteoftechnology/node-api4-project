require('dotenv').config()

const server = require('./api/server')
const {port} = require('./config')


server.listen(port, () =>{
    console.log(`listening on ${port}`)
})