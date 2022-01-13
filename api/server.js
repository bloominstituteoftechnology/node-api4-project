const express = require('express')
const server = express()
const cors = require('cors')

server.use(express.json())
server.use(cors())

server.get('/', (_, res) => {
    res.send(`<h2>Making Magic!</h2>`)
})

const users = [
    {
        user: 'Tamara',
        password: 'leo85'
    },
    {
        user: 'Antonio',
        password: '2kidsand@Dad'
    },
    {
        user: 'Makenzie',
        password: 'ChunkyMonkey08'
    }
]

const register = [
    {
        user: 'Tamara',
        password: 'leo85'
    }
]

const login = [
    {
        user: 'Tamara',
        password: 'leo85'
    }
]

server.get('/api/users', (_, res) => {
    res.status(200).json(users)
})

server.post('/api/register', (_, res) => {
    res.status(201).json(register)
})

server.post('/api/login', (_, res) => {
    if(!login){
        res.status(404).json({message: 'Correct Credentials required'})
    }else{
        res.status(200).json({message: 'Welcome User'})
    }
})

module.exports = server
