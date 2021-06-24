const Comments = require("./comments-model");

module.exports = {
  checkCommentID,
};

//check for ID
function checkCommentID() {
  return (req, res, next) => {
    const { id } = req.params;
    Comments.getById(id)
      .then((commentID) => {
        if (commentID) {
          req.commentID = commentID;
          next();
        } else {
          res
            .status(404)
            .json({ error: `can't find comment by user of id # ${id}` });
        }
      })
      .catch((err) => next(err));
  };
}
