const express = require('express');
const userRouter = require('./users/userRouter')
const helmet = require('helmet')
const cors = require('cors')

const server = express();

// 3rd party middleware
server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/api/users', userRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

// - `logger()`

//   - `logger` logs to the console the following information about each request: request method, request url, and a timestamp
//   - this middleware runs on every request made to the API

function logger(req, res, next) {
  console.log(`Method ${req.method}, URL ${req.url}, ${Date(Date.now).toString()}`)
  next()
}


module.exports = server;
