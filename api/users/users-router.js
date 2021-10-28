const express = require('express')
const Users = require('./users-model.js')
const userRouter = express.Router

// GET all users
userRouter.get('/users', (_, res) => {
  Users.get()
    .then(users => res.status(200)
      .json(users))
    .catch(err => res.status(500)
      .json(err.message))
})

// POST new user
userRouter.post('/register', (req, res) => {
  Users.newUser(req.body)
    .then(user => res.status(201)
      .json(user))
    .catch(err => res.status(500)
      .json(err.message))
})

// POST login user (very basic login, NOT SECURE)
userRouter.post('/login', (req, res) => {
  Users.welcomeUser(req.body)
    .then(user => {
      user
        ? res.status(200)
          .json(`Welcome back ${user.name}`)
        : res.status(404)
          .json(`User not found`)
    })
})

module.exports = userRouter
