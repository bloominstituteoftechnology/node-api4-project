const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    const movies = [{
        "id": 1,
        "movie": "The Godfather"
    },
    {
        "id": 1,
        "movie": "The Godfather Part 2"
    },
    {
        "id": 1,
        "movie": "Stranger Than Fiction"
    },
    {
        "id": 1,
        "movie": "Dr. Strangelove"
    },

];

    res.status(200).json(movies)
});

// make the port dynamic using built in express environment as shown below. Port must be upper case as PORT
const port = process.env.PORT || 6000;
server.listen(port, () => console.log(`\n** Running on port ${port}`))