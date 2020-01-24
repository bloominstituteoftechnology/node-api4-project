const express = require("express");
const Posts = require("./postDb");
const Users = require("../users/userDb");

const router = express.Router();

router.use(errorHandler);

router.get("/", (req, res) => {
  Posts.get()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/:id", validatePostId, (req, res) => {
  const { id } = req.params;
  Posts.getById(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(({ message }) => {
      console.log(message);
      res.status(500).json(message);
    });
});

router.delete("/:id", validatePostId, (req, res) => {
  Posts.remove(req.id)
    .then(count => {
      if (count > 0) {
        res.status(200).json(`Post removed from database`);
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", validatePostId, (req, res, next) => {
  if (!req.body.text) {
    next("required text field is missing");
  }
  const changes = { text: req.body.text };
  Posts.update(req.id, changes)
    .then(count => {
      if (count > 0) {
        Posts.getById(req.id).then(post => {
          res.status(200).json(post);
        });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

// custom middleware

function validatePostId(req, res, next) {
  const { id } = req.params;
  Posts.getById(id)
    .then(post => {
      if (post) {
        req.post = post;
        req.id = id;
        next();
      } else {
        next(`A post with ${id} does not exist!!!`);
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
}

function errorHandler(error, req, res, next) {
  console.log("error: ", error);
  res.status(400).json({ message: error });
}

module.exports = router;
