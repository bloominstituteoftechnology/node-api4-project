const express = require('express');
const userRouter = require('./users/userRouter.js');
const postRouter = require('./posts/postRouter.js');

const server = express();

server.use(logger);
server.use(express.json());
server.use('/users', userRouter);
server.use('/posts', postRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});


//custom middleware
function logger(req, res, next) {
  console.log(`Time: ${new Date().toISOString()} Request Method: ${req.method}. Request url: ${req.url}`);
  next();
}

module.exports = server;
