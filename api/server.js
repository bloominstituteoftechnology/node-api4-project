const express = require('express');
const Users = require('./userData.js')

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("This is a server.")
})

server.get('/api/users', (req, res) => {
    Users.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            console.log(err),
            res.status(500).json({message: "error getting users"})
        })
})

server.post('/api/users', (req, res) => {
    const {username, password} = req.body;
    Users.add({username, password})
        .then(user => {
            if(username && password){
            res.status(200).json(user)
            } else {
                res.status(400).json({message: "Username and password required"})
            }
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

server.post('/api/login', (req,res) => {
    const {username, password} = req.body;
    Users.validateUser({username, password})
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json({message: err.message})
        })
})

module.exports = server;