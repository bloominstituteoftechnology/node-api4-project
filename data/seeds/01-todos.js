exports.seed = function(knex, Promise) {
  return knex('todos')
    .truncate()
    .then(function() {
      return knex('todos').insert([
        {
          task: "Save the world",
          completed: false
        },
        {
          task: "cook dinner",
          completed: false
        },
        {
          task: "clean the car",
          completed: false
        },
        {
          task:
            "Dance.",
          completed: false
        },
        {
          task:
            'Write a letter to Gandalf.',
          completed: false
        },
        {
          task:
            'Mend cloak',
          completed: false
        },
        {
          task:
            'Make rabbit stew.',
          completed: false
        },
        {
          task:
            'Bake more Lemnas bread.',
          completed: false
        },
        {
          task:
            'Get the ring from Frodo',
          completed: false
        },
      ]);
    });
};
