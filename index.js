const dotenv = require("dotenv").config()
const express = require("express")
const server = express()
const port = process.env.PORT || 9000

server.use("/api/", (_, res) => {
	res.json({
		data: "Hello world!"
	})
})

server.listen(port, () => {
	console.log(`Server is running on ${port}`)
})

// console.log("Server is live")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)