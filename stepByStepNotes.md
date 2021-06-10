https://github.com/qirhi/herokuapp.git

## get a git ignore file - node type
npx gitignore node

## get a package.json
npm init -y

## get your .git folder
git init

NOTES:
git remote -v
- Tells you where you are pushing and fetching

## install express
[] npm i express

## install nodemon
[] npm i -D nodemon

## set up scripts - package.json

"start":"node index.js"
    - Heroku REQUIRES a start script

"server":"nodemon index.js"

## create index.js

##  write these logs in the index.js

console.log("hi")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER) /* .USERNAME for windows */
console.log(process.env.PORT) 

##  npm run server

npm run server

## create .env file in root

- it is greyed out, so it gets ignored
- sensitive info: keys, tokens goes in this file

## install .env
[] npm i dotenv

## Add to .env file

PORT=1234

## bring into the index.js

const dotenv = require("dotenv").config()

## add console.log to index.js

console.log(process.env.PORT);

## make the server - in index.js

const express = require("express");
const app = express();

## define the port - in index.js
const port = process.env.PORT || 5000

## set the server to listen on port

app.listen(port, () => {
    console.log(`Server runnin gon port ${port}`)
})

## set up the end point - in index.js
- use underscore as a placeholder

app.use("/api/", (_,res)=> {
    res.json({data: "The API is serving data! Can put anything here!"})
})








