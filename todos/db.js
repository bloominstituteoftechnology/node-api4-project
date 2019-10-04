const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  insert,
  update,
  remove,
};

function find() {
  return db('todos');
}

function findById(id) {
  return db('todos').where({ id: Number(id) });
}

function insert(post) {
  return db('todos')
    .insert(post)
    .then(ids => ({ id: ids[0], post }));
}

function update(id, post) {
  return db('todos')
    .where('id', Number(id))
    .update(post)
    .then(ids => ({ id: ids[0], post}));
}

function remove(id) {
  return db('todos')
    .where('id', Number(id))
    .del();
}