const server = require ('./server.js')

const port = 4000

server.listen(port, ()=> {
  console.log(`Server listening on ${port}`)
})