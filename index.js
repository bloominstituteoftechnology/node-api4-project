// code away!
const server = require('./server.js');
const port_number = process.env.PORT || 4000;

server.listen(port_number, () => console.log(`Listening on port ${port_number}`))
