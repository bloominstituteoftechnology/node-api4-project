const express = require('express');
const helmet = require('helmet');


const server = express();

server.use(helmet());

server.get('/', (req, res, next) =>{
    res.status(200).json({ api: 'heroku deployment' })
    next();
})

module.exports = server;