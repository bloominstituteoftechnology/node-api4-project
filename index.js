console.log('it is working')
const express = require('express')

const server = express()

const path = require('path')

const port = process.env.PORT || 5000

server.use(express.static(path.join(__dirname, 'client/build')))

server.use(express.json())

server.get('/api/*', (req, res)=>{
    res.json({
        cohort:'web 41'
    })
})

server.use('*', (req,res) =>{
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(port, ()=>{
    console.log(`listening on ${port}`)
})
