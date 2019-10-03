const express = require('express');
const server = express();
require('dotenv').config();

// const db = require('db');
// db.connect({
//     dbPort: process.env.DB_PORT
// })

server.get('/', (req, res) => {
    res.status(200).json({ Welcome: "TO MY SERVER" })
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`API running on ${port}`)
});