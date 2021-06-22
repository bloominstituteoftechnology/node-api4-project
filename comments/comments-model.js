const db = require("../database/dbConfig");

module.exports = {
  getComments,
  getById,
  postComment,
  deleteComment,
  updateComment,
};

//USERS C.R.U.D
//GET /api/comments
function getComments() {
  return db("comments").select("comments.*");
}

//GET /api/comments/:id
function getById(id) {
  return db("comments").where({ id }).first();
}

//POST /api/comments
function postComment(commentBody) {
  //req.body on router
  return db("comments")
    .insert(commentBody, "id")
    .then((ids) => {
      //ids makes sure we targe the selected ID posts only
      console.log(ids);
      return db("comments").where({ id: ids }).first();
    });
}

//DELETE /api/comments/:id
function deleteComment(id) {
  return db("comments").where({ id }).del();
}

//UPDATE PUT /api/comments/:id
function updateComment(id, changes) {
  return db("comments")
    .update(changes)
    .where({ id })
    .then((ids) => {
      console.log("ids---update--->", ids);
      return db("comments").where({ id: id }).first();
    });
}
