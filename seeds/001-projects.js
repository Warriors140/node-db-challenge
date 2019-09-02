
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'clean bathroom', description: 'very dirty', completed: 'True'},
        {id: 2, name: 'complete sprint challenge', description: 'very important', completed: 'True'},
        {id: 3, name: 'clean kitchen', description: 'messy messy', completed: 'False'}
      ]);
    });
};
