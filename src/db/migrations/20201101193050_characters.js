'use strict';
exports.up = function (knex) {
  return knex.schema.createTable('characters', (table) => {
    table.increments('id').primary();
    table.text('homeworld');
    table.text('name');
    table.text('gender');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('characters');
};
