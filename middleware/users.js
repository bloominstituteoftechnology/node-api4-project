const checkUser = (req, res, next) => {
	let { name } = req.body;

	// check for empty name
	if (!name)
		return res
			.status(400)
			.json({ message: "Sorry, make sure all fields aren't empty" });

	// capitalization name
	const fullName = name
		.split(" ")
		.map(name => name.charAt(0).toUpperCase() + name.slice(1));

	req.body.name = fullName.join(" ");

	next();
};

module.exports = {
	checkUser
};
