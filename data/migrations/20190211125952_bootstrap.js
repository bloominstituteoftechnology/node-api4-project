exports.up = function (knex) {
  return knex.schema
    .createTable('hubs', tbl => {
      tbl.increments();
      tbl.string('name').notNullable().unique();
    })
    .createTable('messages', tbl => {
      tbl.increments();
      tbl.string('sender').notNullable();
      tbl.text('text').notNullable();
      tbl.integer('hub_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('hubs')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('messages')
    .dropTableIfExists('hubs');
};
