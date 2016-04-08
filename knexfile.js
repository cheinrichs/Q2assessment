// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: 'postgres://localhost/galvanize-reads' || process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 1,
      max: 1
    }
  }

};
