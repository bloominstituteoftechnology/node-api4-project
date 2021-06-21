exports.seed = function (knex, Promise) {
  return knex("comments").insert([
    {
      user_id: 1,
      comment: "this is comment for first user",
    },
    {
      user_id: 2,
      comment: "this is comment for second user",
    },
    {
      user_id: 3,
      comment: "this is comment for third user",
    },
    {
      user_id: 4,
      comment: "this is comment for fourth user",
    },
    {
      user_id: 5,
      comment: "this is comment for fifth user",
    },
  ]);
};
