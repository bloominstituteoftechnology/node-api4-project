const db = require("../database/dbConfig");

module.exports = {
  getUsers,
};

//USERS C.R.U.D
//GET /api/users
function getUsers() {
  return db("users").select("users.*");
}
