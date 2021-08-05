const express = require('express')
const cors = require('cors')

const server =express()

server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`
        <h1>Web 44 is great!</h1>
    `)
})

server.use('*', (req, res) =>{
    res.json({message: 'web 44 is awesome indeed!'})
})

module.exports=server;