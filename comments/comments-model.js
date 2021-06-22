const db = require("../database/dbConfig");

module.exports = {
  getComments,
  getById,
  postComment,
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
