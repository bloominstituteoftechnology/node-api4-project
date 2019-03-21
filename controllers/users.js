const router = require("express").Router();

const User = require("../data/helpers/userDb");
const Post = require("../data/helpers/postDb");

// user middleware
const usersMiddleware = require("../middleware/users");
const checkUser = usersMiddleware.checkUser;

// Create user
router.post("/", checkUser, async (req, res) => {
	try {
		const user = req.body;

		const newUser = await User.insert(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error creating that user"
		});
	}
});

// Get all users
router.get("/", async (req, res) => {
	try {
		const users = await User.get();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: "Sorry, we couldn't get users" });
	}
});

// Get users by id
router.post("/:id", async (req, res) => {
	try {
		const { id } = req.params;

		const user = await User.getById(id);

		if (!user)
			return res
				.status(404)
				.json({ message: "Sorry, but that user doesn't exist" });

		return res.status(200).json(user);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error retrieving that user"
		});
	}
});

// Get posts by user
router.get("/:id/posts", async (req, res) => {
	try {
		const { id } = req.params;

		// get user
		const user = User.getById(id);

		// check to see if user exist
		if (!user)
			return res
				.status(404)
				.json({ message: "Sorry, that user doesn't exist" });

		// get user posts
		const userPosts = await User.getUserPosts(id);

		// check to see if user has posts
		if (!userPosts)
			return res.status(200).json({
				message: "Sorry, that user doesn't have any posts"
			});

		return res.status(200).json(userPosts);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was a probel retrieving that users posts"
		});
	}
});

// Update user
router.put("/:id", checkUser, async (req, res) => {
	try {
		const { id } = req.params;

		const updatedUser = await User.update(id, req.body);

		if (!updatedUser)
			return res.status(404).json({
				message: "Sorry, but that user doesn't exist"
			});

		return res.status(200).json({ updatedUser });
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error updating that user"
		});
	}
});

// Delete user
router.delete("/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const user = User.getById(id);

		// check to see if user exist
		if (!user)
			return res
				.status(404)
				.json({ message: "Sorry, that user doesn't exist" });

		// Get user posts
		const userPosts = await User.getUserPosts(id);

		// Delete each post from user (if you dont you get a foreign key error)
		userPosts.forEach(async post => {
			await Post.remove(post.id);
		});

		// remove user
		const deletedUser = await User.remove(id);
		return res.status(200).json(deletedUser);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, there was an error deleting that user"
		});
	}
});

module.exports = router;
