require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");

// endpoints
const userController = require("./controllers/users");
const postContoller = require("./controllers/posts");

const server = express();

// middelware
server.use(express.json());
server.use(bodyParser.json());
server.use(cors());
server.use(helmet());

// route handlers
server.use("/api/users", userController);
server.use("/api/posts", postContoller);
server.use("/", (req, res) =>
	res.status(200).json({ message: "Sanity check" })
);

const port = process.env.PORT;

server.listen(port, () => {
	console.log(`Server now running on http://localhost:${port}`);
});
