const server = require('./api/server.js')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 1234

server.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})