const express = require("express");
const router = express.Router();
const Users = require("./users-model");

// getUsers, getUserById, updateUser, deleteUser, ||||| addUser, findBy,

//GET /api/users
router.get("/", (req, res, next) => {
  Users.getUsers()
    .then((user) => {
      user
        ? res.status(200).json(user)
        : res.status(404).json({ message: `no users found..` });
    })
    .catch((err) => next(err));
});

//GET /api/users/:id
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Users.getById(id)
    .then((user) => {
      console.log("user---id--->", user);
      res.status(200).json(user);
    })
    .catch((err) => next(err));
});

//GET /api/users/:id/comments
router.get("/:id/comments", (req, res, next) => {
  const { id } = req.params;
  Users.getUserComments(id)
    .then((comment) => {
      console.log("comment---->", comment);
      res.status(200).json(comment);
    })
    .catch((err) => next(err));
});

module.exports = router;
