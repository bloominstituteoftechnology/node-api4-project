const express = require('express')
const server = express()
const cors = require('cors')

server.use(cors())
server.use(express.json())

const users = 
[
    {
        user: 'foo',
        password: 'bar'
    },
    {
        user: 'drake',
        password: 'foo1'
    }
]

server.get('/api/users', (req, res) => {
    res.status(200).json(users)
})



module.exports = server