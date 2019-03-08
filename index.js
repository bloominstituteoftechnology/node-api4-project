const express = require('express')
const PostsRouter = require('./data/routers/postsRouter.js')
const UsersRouter = require('./data/routers/usersRouter.js')
const server = express()
server.use(express.json())
server.use(userCaps)
server.use('/api/posts', PostsRouter)
server.use('/api/users', UsersRouter)
function userCaps(req, res, next) {
  if (req.body.name)
    req.body.name = req.body.name.split` `.map(
      n => n.charAt(0).toUpperCase() + n.substring(1)
    ).join` `
  next()
}
const PORT = 8888

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the API</h2>`)
})

server.listen(PORT, _ => {
  console.log(`SERVER RUNNING ON http://localhost:${PORT}`)
})
