
const initializeUsers = () => ([
  { username: 'Kevin', password: '######' },
  { username: 'Vyni', password: '******' },
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

const insert = ({ username, password }) => {
  const newUser = { username, password }
  users.push(newUser)
  return Promise.resolve(newUser)
}

module.exports = {
  find,
  insert,
}
