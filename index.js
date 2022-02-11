const express = require('express')
const server = express()

// ENV
require('dotenv').config()

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})

server.use('*', (req, res) => {
  res.send('<h1>Testtttttt this serverrrrrr ahhhh!</h1>')
})
