const express = require('express')
const server = express()
const cors = require('cors')
const router = express.Router()
const helmet = require('helmet')
const welcomeRouter = require('../welcome/welcome-router')
const usersRouter = require('../users/users-router')

server.use(cors())
server.use(express.json())
server.use(helmet())
server.use('/', welcomeRouter)
server.use('/api/users', usersRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({message: '500 error: Something went wrong'})
})

module.exports = server