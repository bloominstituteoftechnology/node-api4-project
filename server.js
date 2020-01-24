const express = require("express");
const userRouter = require("./users/userRouter");
const postRouter = require("./posts/postRouter");
const helmet = require("helmet");
const morgan = require("morgan");

const server = express();
server.use(express.json(), helmet(), morgan("dev"), logger);

server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

//custom middleware

function logger(req, res, next) {
  console.log(
    `${req.method} Request to ${req.url} at [${new Date().toISOString()}]`
  );
  next();
}

module.exports = server;
