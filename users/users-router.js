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
        : res.status(404).json({ message: `no users found` });
    })
    .catch((err) => next(err));
});

module.exports = router;