exports.up = function (knex) {
    return knex.schema.createTable("users", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 128).notNull(); //.unique()
      tbl.integer("age", 128).notNull();
      tbl.string("location", 128).notNull();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTableIfExists("users");
  };