const router = require("express").Router();

const Post = require("../data/helpers/postDb");

// post middleware
const postMiddleware = require("../middleware/posts");
const checkPost = postMiddleware.checkPost;

// Create post
router.post("/", checkPost, async (req, res) => {
	try {
		const post = req.body;

		const newPost = await Post.insert(post);
		res.status(201).json(newPost);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error creating that post"
		});
	}
});

// Get all posts
router.get("/", async (req, res) => {
	try {
		const posts = await Post.get();

		if (!posts)
			return res.status(404).json({ message: "Sorry, no posts found" });

		return res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was a problem retrieving posts"
		});
	}
});

// Get post by id
router.get("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const post = await Post.getById(id);

		if (!post)
			return res
				.status(404)
				.json({ message: "Sorry, that post doesn't exist" });

		return res.status(200).json(post);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error getting that post"
		});
	}
});

// Update post
router.put("/:id", checkPost, async (req, res) => {
	try {
		const { id } = req.params;
		const post = req.body;

		const updatedPost = await Post.update(id, post);

		if (!updatedPost)
			return res
				.status(400)
				.json({ message: "Sorry, that post doesn't exist" });

		return res.status(200).json(updatedPost);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error trying to update that post"
		});
	}
});

// Delete post
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const post = await Post.remove(id);

		if (!post)
			return res
				.status(404)
				.json({ message: "Sorry, that post doesn't exist" });

		return res.status(200).json(post);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error trying to delete that post"
		});
	}
});

module.exports = router;
