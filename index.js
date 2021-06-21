const server = require("./api/server");
require("dotenv").config();

//env 5000
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
