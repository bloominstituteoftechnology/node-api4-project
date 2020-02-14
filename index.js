const express = require('express');
const port = 5000;

const server = express();

server.use(express.json());

server.listen(port, () => console.log(`Server Runnint on ${port}`));