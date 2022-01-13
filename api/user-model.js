const { nanoid } = require("nanoid")

function getId() {
	return nanoid().slice(0, 5)
}

let users = [
	{ id: getId(), name: "Steve", password: "generic1" },
	{ id: getId(), name: "Other Steve", password: "generic2" }
	
]

module.exports = {
	async findAll() {
		return users
	},

	async create({ name, password }) {
		const newUser = { id: getId(), name, password }
		users.push(newUser)
		return newUser
	},

}