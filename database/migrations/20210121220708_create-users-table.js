exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNull().unique();
      tbl.integer("age", 128).notNull();
      tbl.string("location", 128).notNull();
    })
    .createTable("comments", function (tbl) {
      tbl.increments("id");
      tbl.text("comment").notNull();
      tbl
        .integer("user_id")
        .unsigned()
        .notNull()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("comments").dropTableIfExists("users");
};
