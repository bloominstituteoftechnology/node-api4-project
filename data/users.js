const shortId = require('shortid')

const users = [
  {
    name: 'taco', pword: 'truck', id: shortId(),
  }, {
    name: 'burrito', pword: 'bowl', id: shortId(),
  },
]

module.exports = users