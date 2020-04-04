/* eslint-disable linebreak-style */
require('dotenv').config();

const port = process.env.PORT || 5000;
const server = require('./server');

server.listen(port, () => {
  console.log(`\n*** Server Running on http:localhost:${port} ***\n`);
});


//testing pushing 