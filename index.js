// code away!
const server = require('./server.js');

port = 4000;

server.listen(port, () => {
  console.log(`* Server Running on http://localhost:${port} *`);
});
