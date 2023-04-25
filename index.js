require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const port = process.env.PORT || 9000 //eslint-disable-line

server.use(express.json())
server.use(cors())

server.get('/api/users', (req,res ) => {
    res.json({
        message: 'API working',
        array: ['John', 'Ben', "codsworth", 'McCreedy']
    })
})

server.post('/api/register', (req,res) => {
    const { username, password } = req.body
    const database = [username,password]
    if(!username || !password) {
        res.status(401).json({
            message:'Please complete the form'
        })   
    } else {
        res.status(201).json({
            message:'Thank you for registering',
            data: database
        })
    }
})

server.post('/api/login', (req,res) => {
    const { username, password } = req.body
    const database = [{username:username }, {password:password}]
    if(database.username !== username || database.password !== password) {
        res.status(401).json({
            message:'Wrong password or email'
        })   
    } else {
        res.status(201).json({
            message:'Welcome back :)'
        })
    }
})

server.use('*', (req, res ) => {
    res.send(`<h1>Hello, there!</h1>`)
})

server.use((err,req,res,next) => { //eslint-disable-line
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

server.listen(port, () => {
    console.log(`listening on ${port}`)
})
