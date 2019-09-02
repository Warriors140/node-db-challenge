
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {id: 1, name: 'find a job', description: 'use skills aquired to find job', completed: 'True'},
        {id: 2, name: 'relax', description: 'after sprint challenge enjoy day off', completed: 'True'},
        {id: 3, name: 'play video games', description: 'play new video games all day', completed: 'False'}
      ]);
    });
};
