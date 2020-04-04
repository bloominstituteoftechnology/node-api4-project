/* eslint-disable linebreak-style */
const express = require('express');

const server = express();
server.use(express.json());
const blog = require('./API/blog');

server.get('/', (req, res) => {
  res.send(
    '<h1>If you see this, that means it is working',
  );
});

server.use('/api', blog);

module.exports = server;
