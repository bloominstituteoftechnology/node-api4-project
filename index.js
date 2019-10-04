const express = require('express');
const server = require('./server');

require('dotenv').config();

const dbPort = process.env.DB_PORT;

server.use(express.json());

const port = process.env.PORT || dbPort || 4000;

server.listen(port, () => {
    console.log(`API running on ${port}`)
});