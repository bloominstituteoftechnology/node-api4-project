const express = require("express");
const { resource } = require("../api/server");
const router = express.Router();
const Comments = require("./comments-model");

//GET /api/comments
router.get("/", (req, res, next) => {
  Comments.getComments()
    .then((comment) => {
      comment
        ? res.status(200).json(comment)
        : res.status(404).json({ message: `no comments found..` });
    })
    .catch((err) => next(err));
});

//GET /api/comments/:id
router.get("/:id", (req, res, next) => {
  const { id } = req.params;
  Comments.getById(id)
    .then((comment) => {
      comment
        ? res.status(200).json(comment)
        : res.status(404).json({ error: "cant find comment" });
    })
    .catch((err) => next(err));
});

//POST /api/comments
router.post("/", (req, res, next) => {
  const body = req.body;
  Comments.postComment(body)
    .then((comment) => {
      comment
        ? res.status(201).json(comment)
        : res.status(404).json({ error: `can't post that user of ${body}` });
    })
    .catch((err) => next(err));
});

module.exports = router;
