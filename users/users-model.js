const db = require("../database/dbConfig");

module.exports = {
  getUsers,
  getById,
  getUserComments,
  addUser,
};

//USERS C.R.U.D
//GET /api/users
function getUsers() {
  return db("users").select("users.*");
}

//GET /api/users/:id
function getById(id) {
  return db("users").where({ id }).first();
}

//GET /api/uses/:id/comments
function getUserComments(userId) {
  return db("users")
    .join("comments", "comments.user_id", "=", "users.id")
    .select("users.*", "comments.comment", "comments.user_id")
    .where("comments.user_id", userId);
}

//POST /api/users
function addUser(user) {
  return db("users")
    .insert(user, "ids")
    .then((ids) => {
      return db("users").where({ id: ids }).first();
      //ids returns a single post not in an array
    });
}
