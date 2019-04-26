const express = require('express');

const postsRouter = require('./routes/router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Lambda Seeds API<h2>
    `);
});

module.exports = server;