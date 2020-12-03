const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 5000


const app = express()
app.use(cors())
app.use(express.json())

// api
app.use('/api/*',  (_,  res) => {
    res.json({  data: 'hahahaha' })
})

app.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

app.listen(port, () =>  {
    console.log(`listening on ${port}`)
})