const express = require('express');
const db = require('./userDb');
const dbposts = require('../posts/postDb.js');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
  db.insert(req.body).then(user => res.status(201).json(user));
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  dbposts.insert({...req.body, user_id: req.params.id}).then(post => res.status(201).json(post));
});

router.get('/', (req, res) => {
  // do your magic!
  db.get().then(users => res.status(200).json(users));
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  //console.log(req.user);
  res.status(200).json(req.user);
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  db.getUserPosts(req.params.id).then(posts => res.status(200).json(posts));
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  db.remove(req.params.id).then(num => res.status(201).json({message: `${num} record(s) removed`}));
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
  db.update(req.params.id, req.user).then(num => res.status(201).json({message: `${num} record(s) updated`}));
});

//custom middleware

function validateUserId(req, res, next) {
  const id = req.params.id;
  // do your magic!
  if(!id)
    res.status(500).json({message: "missing id parameter"});
  else
    db
    .getById(id)
    .then(user => {
      if(user)
      {
        req.user = user
        next();
      }
      else
        res.status(400).json({message: "invalid user id"})
    })
    .catch(err => res.status(400).json({message: "invalid user id"}));
}

function validateUser(req, res, next) {
  // do your magic!
  if(!req.body)
    res.status(400).json({message: "missing user data"});
  else if(!req.body.name)
    res.status(400).json({message: "missing required name field"});

  next();
}

function validatePost(req, res, next) {
  // do your magic!
  if(!req.body)
    res.status(400).json({message: "missing post data"});
  else if(!req.body.text)
    res.status(400).json({message: "missing required text field"});

  next();
}

module.exports = router;
