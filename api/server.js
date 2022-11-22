const express = require('express'); // importing a CommonJS module

const hubsRouter = require('./hubs/hubs-router.js');

const morgan = require("morgan")
const helmet = require("helmet")

const { logQuote, checkWord } = require('./middlewares/middleware')

const server = express();

server.use(express.json());
server.use(morgan("dev")) // global middleware, in the console, lets you know what end point, the status, and how long it took to do 
server.use(helmet()) // global middlewear that protects header in requests
server.use(logQuote("penny")) // your own middleware

server.use('/api/hubs', hubsRouter);

server.get('/', checkWord, (req, res) => {
  res.send(`
    <h2>Hubs API</h2>
    <p>Welcome to the Hubs API</p>
  `);
});

server.use('*', (req, res) => {
  // catch all 404 errors middleware
  res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!` });
});

module.exports = server;
