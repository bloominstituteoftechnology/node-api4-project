
exports.up = function(knex) {
    return knex.schema.createTable('todos', function(todos) {
        todos.increments();

        todos.text('task').notNullable();
        todos.boolean('completed').notNullable().defaultTo(false);

    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('todos');
};
