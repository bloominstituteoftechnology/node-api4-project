const app = require('./api/server.js')
const port = process.env.PORT || 4200

app.listen(port, () => {
  console.log(`Serving running on port ${port}`)
})