const express = require('express');
const db = require('./userDb')

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  db.insert(req.body)
    .then(user => {
      res.status(201).json(user)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({error: "There was an error while saving the post to the database"})
    })
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  db.get(req.query)
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json({
        error: "The posts information could not be retrieved."
      })
    })
});

router.get('/:id', validateUserId, (req, res) => {

  db.getById(req.params.id)
    .then(post => {
      post.id !== null ? res.status(200).json(post) : res.status(404).json({
        message: "The post with the specified ID does not exist."
      })
    })
    .catch(error => {
      res.status(500).json({error: "The post information could not be retrieved."})
    })
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
});

router.delete('/:id', validateUserId, (req, res) => {
  db.remove(req.params.id)
    .then(deleted => {
        res.status(200).json(post)
    })
    .catch(error=> {
      res.status(500).json({message: "unable to delete user"})
    })
});

router.put('/:id', validateUserId, (req, res) => {
  if(req.body.name){
    db.update(req.params.id, req.body)
      .then(updatedUser => {
        res.status(200).json(updatedUser)
      })
      .catch(error => {
        res.status(500).json({message:"unable to update user"})
      })
  } else {
    res.status(400).json({message: "please provide a user name"})
  }
});

//custom middleware

// - `validateUserId()`

//   - `validateUserId` validates the user id on every request that expects a user id parameter
//   - if the `id` parameter is valid, store that user object as `req.user`
//   - if the `id` parameter does not match any user id in the database, cancel the request and respond with status `400` and `{ message: "invalid user id" }`

function validateUserId(req, res, next){
  const id = req.params.id;

  db.getById(id)
    .then(user => {
      if(!user) {
        console.log(user)
        res.status(404).json({ message: 'Unable to find user by that ID' });
      }
    })
    next();
}

// - `validateUser()`

//   - `validateUser` validates the `body` on a request to create a new user
//   - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing user data" }`
//   - if the request `body` is missing the required `name` field, cancel the request and respond with status `400` and `{ message: "missing required name field" }`

function validateUser(req, res, next) {
  const body = req.body;

  if (Object.keys(body).length === 0) {
    res.status(400).json({ message: "missing user data" });
  } else if (!body.name) {
    res.status(400).json({ message: "missing required name field" });
  }
  
  next();
}

// - `validatePost()`
//   - `validatePost` validates the `body` on a request to create a new post
//   - if the request `body` is missing, cancel the request and respond with status `400` and `{ message: "missing post data" }`
//   - if the request `body` is missing the required `text` field, cancel the request and respond with status `400` and `{ message: "missing required text field" }`

function validatePost(req, res, next){
  const body = req.body;

  if (Object.keys(body).length === 0) {
    res.status(400).json({ message: "missing post data" });
  } else if (!body.text) {
    res.status(400).json({ message: "missing required text field" });
  }
  next();
}

module.exports = router;
