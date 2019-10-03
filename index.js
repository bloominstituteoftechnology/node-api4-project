const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.status(200).json({ Welcome: "TO MY SERVER" })
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`API running on ${port}`)
});