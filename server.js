const express = require('express');
const server = express();
const helmet = require('helmet');
const todosRouter = require('./todos/todosRouter');
const cors = require("cors")

//middlware, if any
server.use(cors())
server.use(helmet());
server.use(express.json());
server.use('/api/todos', todosRouter);

module.exports = server;