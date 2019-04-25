const express = require("express");

const db = require("./db.js");

const router = express.Router();

//Get all Post
router.get("/", (req, res) => {
  db.find()
    .then(post => {
      res.json(post);
    })
    .catch(err => {
      res.status(500).json({
        error: "There was an error while saving the post to the database"
      });
    });
});

//Get Post by Id
router.get("/:id", (req, res) => {
  const PostId = req.params.id;
  db.findById(PostId)
    .then(post => {
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.json(post);
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
});

// Add new Post
router.post("/", (req, res) => {
  const { title, contents } = req.body;
  if (!title || !contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.insert({ title, contents })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the post to the database"
        });
      });
  }
});

//Delete Post by Id
router.delete("/:id", (req, res) => {
  const UserId = req.params.id;
  db.remove(UserId)
    .then(post => {
      if (!post) {
        res.status(404).json({
          message: "The post with the specified ID does not exist."
        });
      } else {
        res.end();
      }
    })
    .catch(err => {
      res.status(500).json({ error: "The post could not be removed" });
    });
});

//Update Post
router.put("/:id", (req, res) => {
  const UserId = req.params.id;
  const updatePost = req.body;
  if (!updatePost.title || !updatePost.contents) {
    res.status(400).json({
      errorMessage: "Please provide title and contents for the post."
    });
  } else {
    db.update(UserId, updatePost)
      .then(post => {
        if (!post) {
          res.status(404).json({
            message: "The post with the specified ID does not exist."
          });
        } else {
          res.status(200).json(post);
        }
      })
      .catch(err => {
        res.status(500).json({
          error: "The post information could not be modified."
        });
      });
  }
});

module.exports = router;
