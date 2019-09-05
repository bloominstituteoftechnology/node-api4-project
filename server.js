const express = require("express")
const server = express()
const cors = require("cors")
const knex = require("knex")
const dbConfig = require("./knexfile")
const db = knex(dbConfig.development)
server.use(express.json(), cors())

server.get("/", (req, res) => {
    res.status(201).json("Working")
})
server.get("/api/posts", (req, res) => {
db("posts").then(post => {
    res.status(201).json(post)
})
.catch(err =>{
res.status(401).json({err:"Nope, not happening"})
})
})


module.exports=server