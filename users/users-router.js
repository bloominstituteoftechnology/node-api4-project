const express = require("express");
const router = express.Router();
const Users = require("./users-model");
const { checkUserID, userPostValidation } = require("./users-middleware");

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
//middleware to get the ID
router.get("/:id", checkUserID(), (req, res, next) => {
  res.status(200).json(req.userID);
});

//GET /api/users/:id/comments
router.get("/:id/comments", checkUserID(), (req, res, next) => {
  const { id } = req.params;
  Users.getUserComments(id)
    .then((comment) => {
      console.log("comment---->", comment);
      res.status(200).json(comment);
    })
    .catch((err) => next(err));
});

//POST /api/users/
router.post("/", userPostValidation(), (req, res, next) => {
  const body = req.body;
  // const { name, age, location } = req.body;
  // if (!name || !age || !location) {
  //   res.json({ message: "please check your properties" });
  // }
  Users.addUser(body)
    .then((user) => {
      user
        ? res.status(201).json(user)
        : res.status(404).json({ error: `no user found` });
    })
    .catch((err) => next(err));
});

module.exports = router;
