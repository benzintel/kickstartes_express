exports.mainDatabase = {
  client: process.env.DATABASE_DERIVE || 'postgres',
  connection: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    user: process.env.DATABASE_USER || 'root',
    password: process.env.DATABASE_PASS || 'passwordNaja',
    database: process.env.DATABASE_DB || 'test-dopa',
    dateStrings: true
  }
};