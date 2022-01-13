const express = require("express")
const morgan = require("morgan")
const helmet = require("helmet")
const Users = require("./user-model")

const server = express()

server.use(express.json())
server.use(morgan('dev'))
server.use(helmet())

server.get("/api/users", (req, res) => {
	Users.findAll()
		.then(users => {
		res.status(200).json(users)
		})
		.catch(err => {
		res.status(500).json({message: err.message})
	})
})

server.post("/api/users", (req, res) => {
	const newUser = req.body
	Users.create(newUser)
		.then(user => {
			res.json(user)
		})
		.catch(err => {
			res.status(500).json({message: err.message})
		})
})

server.use("/", (req, res) => {
	res.send(`<h2>Welcome to my first api</h2>`)
});

module.exports = server;