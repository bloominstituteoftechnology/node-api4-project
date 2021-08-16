const dotenv = require('dotenv')
  .config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const usersRouter = require('../api/users/users-router.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(helmet())
app.use('/api/', usersRouter)

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app
