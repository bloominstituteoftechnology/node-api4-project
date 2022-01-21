const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())


server.get('/', (req, res) => [
    res.send('Hello from server!')
])

module.exports = server