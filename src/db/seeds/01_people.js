'use strict';

exports.seed = (knex) => {
  return knex('characters')
    .del()
    .then(() =>
      knex('characters').insert({
          homeworld : "Tatooine",
          name : "Luke Skywalker",
          gender : "male",
        })
    );
};