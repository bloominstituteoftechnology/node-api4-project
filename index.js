const dotenv = require("dotenv").config()
const server = require("./api/server")
const port = process.env.PORT || 9000
const cors = require("cors")

server.use(cors())


server.use("/api/", (_, res) => {
	res.json({data: "Hello world!"})

})

server.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})

// console.log("Server is live")
// console.log(__dirname)
// console.log(__filename)
// console.log(process.env.USER)
// console.log(process.env.APIKEY)
// console.log(process.env.PORT)
// console.log(process.env.DBPASS)