const express = require("express");
const router = express.Router();
const helmet = require("helmet");
const cors = require("cors");

//server
const server = express();

//import routers
const welcomeRouter = require("../welcome/welcome-router");
const usersRouter = require("../users/users-router");

//Global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//Server endpoints --------->
server.use("/", welcomeRouter);
// --> /api/users
server.use("/api/users", usersRouter);

//middleware for CATCH ERROR on all endpoints of /api/messages
server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "500 error: Something went wrong",
  });
});

module.exports = server;