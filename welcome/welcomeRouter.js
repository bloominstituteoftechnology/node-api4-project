const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.json({
        message:`Welcome to Dwaine's User API`,
        Fact: "BIG FAXX"
    })
})

module.exports = router