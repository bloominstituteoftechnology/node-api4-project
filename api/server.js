const dotenv = require('dotenv')
  .config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const data = require('../data/data.js')
const helmet = require('helmet')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
app.use(helmet())
app.use('/api/tacoTruck', (_, res) => res.json({ data: data }))

app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

module.exports = app
