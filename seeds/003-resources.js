
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {id: 1, name: 'randy', description: 'thats me'},
        {id: 2, name: 'berry', description: 'who knows'},
        {id: 3, name: 'ronnie', description: '2k'}
      ]);
    });
};
