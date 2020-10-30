require('dotenv').config()
const server = require('./server')

const port = process.env.PORT ;
const secret = process.env.SECRET_THING ;
console.log(port,secret);

server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });

module.exports = server;