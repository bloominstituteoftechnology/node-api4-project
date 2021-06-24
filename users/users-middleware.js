const Users = require("./users-model");

module.exports = {
  checkUserID,
  userPostValidation,
};

//check for ID
function checkUserID() {
  return (req, res, next) => {
    const { id } = req.params;
    Users.getById(id)
      .then((userID) => {
        if (userID) {
          req.userID = userID;
          next();
        } else {
          res.status(404).json({ error: `can't find user of id # ${id}` });
        }
      })
      .catch((err) => next(err));
  };
}

//check user post
function userPostValidation() {
  return async (req, res, next) => {
    const body = req.body;
    if (!body.name || !body.age || !body.location) {
      res.status(418).json({ message: "please check your properties" });
    }
    next();
  };
}
