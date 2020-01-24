const express = require("express");
const Users = require("./userDb");
const Posts = require("../posts/postDb");

const router = express.Router();

router.use(errorHandler);

router.post("/", validateUser, (req, res) => {
  Users.insert(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.post("/:id/posts", validateUserId, validatePost, (req, res) => {
  const postInfo = {
    text: req.body.text,
    user_id: req.id
  };
  Posts.insert(postInfo)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/", (req, res) => {
  Users.get()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.get("/:id", validateUserId, (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.get("/:id/posts", validateUserId, (req, res) => {
  Users.getUserPosts(req.id)
    .then(posts => {
      if (posts.length > 0) {
        res.status(200).json(posts);
      } else {
        res.status(200).json("this user does not have any posts");
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.delete("/:id", validateUserId, (req, res) => {
  Users.remove(req.id)
    .then(count => {
      if (count > 0) {
        res
          .status(200)
          .json(`User: ${req.user.name} removed from the database`);
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

router.put("/:id", validateUserId, (req, res, next) => {
  if (!req.body.name || req.body.name == "") {
    next("required name field is missing");
  }
  const changes = { name: req.body.name };
  Users.update(req.id, changes)
    .then(count => {
      if (count > 0) {
        Users.getById(req.id).then(user => {
          if (user) {
            res.status(200).json(user);
          }
        });
      }
    })
    .catch(err => {
      res.status(500).json(err.message);
    });
});

//custom middleware

function validateUserId(req, res, next) {
  const { id } = req.params;
  Users.getById(id)
    .then(user => {
      if (user) {
        req.user = user;
        req.id = id;
        next();
      } else {
        next("User does not exist!!!!");
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "execption", err });
    });
}

function validateUser(req, res, next) {
  if (!req.body) {
    next("missing user data");
  } else if (!req.body.name) {
    next("missing required name field");
  } else {
    next();
  }
}

function validatePost(req, res, next) {
  if (!req.body) {
    next("missing post data");
  } else if (!req.body.text) {
    next("missing required text field");
  } else {
    next();
  }
}

function errorHandler(error, req, res, next) {
  console.log("error: ", error);
  res.status(400).json({ message: error });
}

module.exports = router;
