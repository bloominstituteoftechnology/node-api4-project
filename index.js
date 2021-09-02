require('dotenv').config()
const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 5000

const server = express()

server.use(express.json())
server.use(cors())

const users = [
    {username: 'Bradford',
    password: 'BradFordTruck'},
    {username: 'Trapford',
    password: 'TrapFordTruck'},
    {username: 'Capford',
    password: 'CapFordTruck'},
    {username: 'Crackford',
    password: 'CrackFordTruck'},
]

server.get('/api/users', (req, res)=>{
    res.json(users)
})


server.use("*", (req, res, next) => {
    res.status(404).json({ message: `${req.method} ${req.baseUrl} not found!!` });
});
  
server.get("/", (req, res) => {
    res.send(`<h2>Let's write some middleware!</h2>`);
});
  

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})