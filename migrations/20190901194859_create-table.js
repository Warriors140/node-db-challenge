
exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable();
        tbl.string('description', 128);
        tbl.boolean('completed');
        tbl.integer('resource_id')
          .unsigned()
          .references('id')
          .inTable('resource')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('resource', tbl => {
        tbl.increments();
        tbl.string('name', 128).notNullable().unique();
        tbl.string('description', 128);
      })
      .createTable('task', tbl => {
        tbl.increments();
        tbl.string('description', 128).notNullable();
        tbl.string('notes', 128);
        tbl.boolean('completed');
        tbl.integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('project')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
      })
      .createTable('project_resources', tbl => {
        tbl.integer('project_id')
          .unsigned()
          .references('id')
          .inTable('project')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resource')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        tbl.primary(['project_id', 'resource_id']);
      });
    };


exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources');
};
