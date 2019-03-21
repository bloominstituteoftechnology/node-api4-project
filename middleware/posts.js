const checkPost = (req, res, next) => {
	let { text, user_id } = req.body;

	// check for empty name
	if (!text)
		return res
			.status(400)
			.json({ message: "Sorry, make sure all fields aren't empty" });

	if (!user_id)
		return res
			.status(400)
			.json({ message: "Sorry, please provide a user id" });

	next();
};

module.exports = {
	checkPost
};
