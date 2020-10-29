const express = require('express')

const server = express(); 

server.use(express.json());

server.get('/', (req, res, next) =>{
    res.status(200).json({ api: 'heroku deployment' })
    next();
})

module.exports = server;