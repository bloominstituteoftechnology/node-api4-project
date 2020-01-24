const server = require("./server");

const port = process.env.PORT || 8900;

server.listen(port, () => {
  console.log(`*** Server Running on http://localhost:${port} ***`);
});
