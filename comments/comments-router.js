const express = require("express");
const router = express.Router();
const Comments = require("./comments-model");
const { checkCommentID } = require("../comments/comments-middleware");

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
router.get("/:id", checkCommentID(), (req, res, next) => {
  res.status(200).json(req.commentID);
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

//DELETE /api/comments/:id
router.delete("/:id", checkCommentID(), (req, res, next) => {
  const { id } = req.params;
  Comments.deleteComment(id)
    .then((post) => {
      console.log("post---->", post);
      post
        ? res.status(200).json({ deleted: post })
        : res.status(404).json({ error: `can't delete user by ${id}` });
    })
    .catch((err) => next(err));
});

//UPDATE /api/comments/:id
router.put("/:id", (req, res, next) => {
  const commentBody = req.body;
  const { id } = req.params;

  Comments.updateComment(id, commentBody)
    .then((comment) => {
      res.status(200).json(comment);
      console.log("comment update--->", comment);
    })
    .catch((err) => next(err));
});

module.exports = router;
