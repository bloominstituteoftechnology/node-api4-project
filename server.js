const express = require("express");
const cors = require("cors");

const dataRouter = require("./data/data-router");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.send(`Server Is Running...`);
});

server.use("/api/posts", dataRouter);

module.exports = server;
