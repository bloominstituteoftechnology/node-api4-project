const express = require('express');
const db = require('./postDb.js');

const router = express.Router();

router.get('/', (req, res) => {
  // do your magic!
  db.get().then(posts => res.status(200).json(posts));
});

router.get('/:id', validatePostId, (req, res) => {
  // do your magic!
  res.status(200).json(req.post);
});

router.delete('/:id', validatePostId, (req, res) => {
  // do your magic!
  db.remove(req.params.id).then(num => res.status(201).json({message: `${num} post(s) removed`}));
});

router.put('/:id', validatePostId, (req, res) => {
  // do your magic!
  db.update(req.params.id, req.post).then(num => res.status(201).json({message: `${num} post(s) updated`}));
});

// custom middleware

function validatePostId(req, res, next) {
  // do your magic!
  const id = req.params.id;
  // do your magic!
  if(!id)
    res.status(500).json({message: "missing id parameter"});
  else
    db
      .getById(id)
      .then(post => {
        if(post)
        {
          req.post = post
          next();
        }
        else
          res.status(400).json({message: "invalid post id"})
      })
      .catch(err => res.status(400).json({message: "invalid post id"}));
}

module.exports = router;
