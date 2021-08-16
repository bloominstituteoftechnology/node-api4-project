const users = require('../../data/users.js')
const shortId = require('shortid')
const { json } = require('express')

module.exports = {
  get, newUser, welcomeUser,
}

const get = async () => {
  return users
}

const newUser = async user => {
  const newUser = { ...user, id: shortId() }
  return { ...users, newUser }
}

const welcomeUser = async user => {
  return users.filter(id => id === user.id)
}