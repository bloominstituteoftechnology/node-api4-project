const express = require('express')
const cors = require('cors')

const server =express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`
        <h1>Welcome to my api!</h1>
    `)
})

server.use('*', (req, res) =>{
    res.json({message: 'Something aint right about what you just asked for...'})
})

module.exports=server;