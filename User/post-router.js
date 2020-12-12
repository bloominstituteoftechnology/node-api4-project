const express = require("express")
const db = require("../data/db")

const router = express.Router()

// GET ALL POSTS
router.get("/posts", (req, res) => {
    console.log(req.query)
    db.find()
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error retrieving the posts",
            })
        })
})

// GET SPECIFIC POST
router.get("/posts/:id", (req, res) => {
    db.findById(req.params.id)
        .then((post) => {
            if (post) {
                res.json(post)
            } else {
                res.status(404).json({
                    message: "The post with the specified ID does not exist."
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                error: "You screwed up"
            })
        })
})

// CREATE NEW POST
router.post("/posts", (req, res) => {
    if (!req.body.title || !req.body.contents) {
        return res.status(400).json({
            errorMessage: "Please provide title and contents for the post."
        })
    }

    db.insert(req.body)
        .then((post) => {
            res.status(201).json(post)
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                error: "There was an error while saving the post to the database."
            })
        })
})

// GET COMMENTS FOR POST BY ID
router.get("/posts/:id/comments", (req, res) => {
    db.findPostComments(req.params.id)
        .then((comments) => {
            if (comments) {
                res.json(comments)
            } else {
                res.status(404).json({
                    errorMessage: "Post not found."
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                error: "Error retrieving the post",
            })
        })
})

// CREATE NEW COMMENT FOR POST BY ID
router.post("/posts/:id/comments", (req, res) => {

    if (!req.body.text) {
        return res.status(400).json({
            message: "Need a text in the body fam",
        })
    }

    db.insertComment({ text: req.body.text, post_id: req.params.id })
        .then((comment) => {
            res.status(201).json({
                post_id: req.params.id,
                text: req.body.text
            })
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "Something ain't right. We didn't add the comment.",
            })
        })
})

// DELETE POST BY ID
router.delete("/posts/:id", (req, res) => {
    db.remove(req.params.id)
        .then((count) => {
            if (count > 0) {
                res.status(200).json({
                    message: "The post has been removed",
                })
            } else {
                res.status(404).json({
                    message: "The post could not be found",
                })
            }
        })
})

// UPDATE POST BY ID
router.put("/posts/:id", (req, res) => {
    if (!req.body) {
        return res.status(400)({
            message: "Missing title or contents"
        })
    }

    db.update(req.params.id, req.body)
        .then((post) => {
            if (post) {
                res.status(201).json({
                    id: req.params.id,
                    title: req.body.title,
                    contents: req.body.contents,
                })
            } else {
                res.status(404).json({
                    message: "The post could not be found",
                })
            }
        })
        .catch((error) => {
            console.log(error)
            res.status(500).json({
                message: "Error updating the post",
            })
        })
})

module.exports = router