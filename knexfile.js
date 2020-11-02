'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.password,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
  },
  test: {
    client: 'pg',
    connection: {
      host: process.env.host,
      user: process.env.user,
      password: process.env.password,
      database: process.env.password,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
  }
};
