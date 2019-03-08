const express = require('express')

const Posts = require('../helpers/postDb')

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.get()
    res.status(200).json(posts)
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The posts information could not be retrieved.' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const post = await Posts.getById(req.params.id)
    post
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' })
  } catch (error) {
    res
      .status(500)
      .json({ error: 'The post information could not be retrieved.' })
  }
})

router.post('/', async (req, res) => {
  if (req.body && req.body.text && req.body.user_id)
    try {
      const post = await Posts.insert(req.body)
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({
        error: 'There was an error while saving the post to the database'
      })
    }
  else
    res
      .status(400)
      .json({ errorMessage: 'Please provide text and user id for the post.' })
})

router.delete('/:id', async (req, res) => {
  try {
    const post = await Posts.remove(req.params.id)
    post
      ? res.status(200).json(post)
      : res
          .status(404)
          .json({ message: 'The post with the specified ID does not exist.' })
  } catch (error) {
    res.status(500).json({ error: 'The post could not be removed' })
  }
})

router.put('/:id', async (req, res) => {
  if (req.body && req.body.text && req.body.user_id)
    try {
      const post = await Posts.update(req.params.id, req.body)
      post
        ? res.status(200).json(post)
        : res
            .status(404)
            .json({ message: 'The post with the specified ID does not exist.' })
    } catch (error) {
      res
        .status(500)
        .json({ error: 'The post information could not be modified.' })
    }
  else
    res
      .status(400)
      .json({ errorMessage: 'Please provide title and contents for the post.' })
})

module.exports = router
