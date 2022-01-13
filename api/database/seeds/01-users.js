const faker = require("faker");

exports.seed = function (knex) {
  return knex("users").insert([
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
    {
      name: faker.name.findName(),
      age: faker.random.number(),
      location: faker.address.city(),
    },
  ]);
};