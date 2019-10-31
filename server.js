const express = require('express');

const logger = require('./api/logger.js');

const userRouter = require('./users/userRouter.js');

const server = express();

// middleware

server.use(express.json()); // built-in

server.use('/api/users', logger('logger for users'), userRouter);

// routes

server.get('/', logger('logger for server.js'), (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});



module.exports = server;
