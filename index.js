const express = require("express")
const usersRouter = require("./User/post-router")
const welcomeRouter = require("./welcome/welcomeRouter")
const helmet = require("helmet")
const cors = require("cors")

const server = express()
const port = 4000

server.use(express.json())
server.use(usersRouter)
server.use(welcomeRouter)
server.use(function (req, res) {
    res.status(404).send("This is an invalid address")
})

server.listen(port, () => {
    console.log(`Server is live at ${port}`)
})