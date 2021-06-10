const dotenv = require("dotenv").config()

const express = require("express");
const app = express();
const cors = require("cors");



const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json());

app.use("/api/", (_,res)=>{
    res.json({data: "The API is serving data! Can put anything here!"})
})

app.listen(port,() => {
    console.log(`Server runnin gon port ${port}`)
})




console.log("hi");
console.log(__dirname);
console.log(__filename);
console.log(process.env.USER); /* .USERNAME for windows */
console.log(process.env.PORT);

console.log(process.env.GREET);
console.log(process.env.FOOD);
console.log(process.env.REALLY);