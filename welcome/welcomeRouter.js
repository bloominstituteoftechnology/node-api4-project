const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>{
    res.status(200).json({
        message:`Welcome ${process.env.PROJECT}`,
        fact: process.env.DESCRIPTION || "BIG FAXX"
    })
})

module.exports = router