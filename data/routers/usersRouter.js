const express = require('express')

const Users = require('../helpers/userDb')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.get()
    res.status(200).json(users)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The users information could not be retrieved.' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const user = await Users.getById(req.params.id)
    user
      ? res.status(200).json(user)
      : res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The user information could not be retrieved.' })
  }
})

router.post('/', async (req, res) => {
  if (req.body && req.body.name)
    try {
      const user = await Users.insert(req.body)
      res.status(201).json(user)
    } catch (error) {
      res.status(500).json({
        error: 'There was an error while saving the user to the database'
      })
    }
  else
    res
      .status(400)
      .json({ errorMessage: 'Please provide a name for the user.' })
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await Users.remove(req.params.id)
    user
      ? res.status(200).json(user)
      : res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' })
  } catch (error) {
    res.status(500).json({ error: 'The user could not be removed' })
  }
})

router.put('/:id', async (req, res) => {
  if (req.body && req.body.name)
    try {
      const user = await Users.update(req.params.id, req.body)
      user
        ? res.status(200).json(user)
        : res
            .status(404)
            .json({ message: 'The user with the specified ID does not exist.' })
    } catch (error) {
      res
        .status(500)
        .json({ error: 'The user information could not be modified.' })
    }
  else
    res
      .status(400)
      .json({ errorMessage: 'Please provide title and contents for the user.' })
})

router.get('/:id/posts', async (req, res) => {
  try {
    const user = await Users.getUserPosts(req.params.id)
    user
      ? res.status(200).json(user)
      : res
          .status(404)
          .json({ message: 'The user with the specified ID does not exist.' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The user information could not be retrieved.' })
  }
})

module.exports = router
