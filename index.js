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

server.listen(3001, () => {
	console.log(`Server now running on http://localhost:3001`);
});
