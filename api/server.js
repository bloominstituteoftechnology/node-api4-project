const express = require('express')
const User = require('./users/model')

const server = express()
server.use(express.json())

server.get('/api/users', (req, res) => {
    User.find()
        .then(users => {
            res.json(users)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error getting users',
                err: err.message,
                stack: err.stack,
            })
        })
})

server.post('/api/register', (req, res) => {
    const user = req.body;
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Please provide username and password for the user"
        })
    } else {
      User.insert(user)
        .then(createdUser => {
            res.status(201).json(createdUser)
        })
        .catch(err => {
            res.status(500).json({
                message: 'error creating user',
                err: err.message,
                stack: err.stack,
            })
        })
    }
})

server.post('/api/login', (req, res) => {
    const user = req.body;
    if (!user.username || !user.password) {
        res.status(400).json({
            message: "Please provide username and password for the user"
        })
    } else {
      res.json({
          message: "Welcome!"
      })
        .catch(err => {
            res.status(500).json({
                message: 'error login user',
                err: err.message,
                stack: err.stack,
            })
        })
    }
})

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server;