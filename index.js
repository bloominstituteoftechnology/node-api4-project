const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const usersRouter = require("./User/post-router")
const welcomeRouter = require("./welcome/welcomeRouter")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use(usersRouter)
server.use(welcomeRouter)
// server.use((err, req, res, next) => {
// 	console.log(err)
// 	res.status(500).json({
// 		message: "Something went wrong",
// 	})
// })
server.use(function (req, res) {
    res.status(404).send("This is an invalid address")
})

server.listen(port, () => {
    console.log(`Server is live at ${port}`)
})