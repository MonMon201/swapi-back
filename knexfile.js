'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PGhost,
      user: process.env.PGuser,
      password: process.env.PGpassword,
      database: process.env.PGdatabase,
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
      host: process.env.PGhost,
      user: process.env.PGuser,
      password: process.env.PGpassword,
      database: process.env.PGdatabase,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
  }
};
