const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const cors = require('cors')
const path = require('path')

const port = process.env.PORT || 5000

console.log('hi my name is paul')
console.log(__dirname)
console.log(process.env.PAUL)
console.log(process.env.PORT)


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))

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