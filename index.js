require('dotenv').config()
console.log(process.env.PORT, process.env.NODE_ENV)
const express = require('express')
const cors = require('cors')

const server = express()

const port = process.env.PORT || 9000
server.use(express.json())
server.use(cors())

server.get('/api/hello', (req,res)=>{
    res.json({message: 'api is working'})
})
server.use('*', (req,res,next)=>{
    res.send("<h1>this work</h1>")
})

server.use((err, req, res, next) =>{
    res.status(500).json({
        message:err.message,
        stack: err.stack
    })
})

server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})