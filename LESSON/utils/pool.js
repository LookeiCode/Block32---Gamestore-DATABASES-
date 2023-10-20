// Alex said we don't need to worry about learning this
// Because we will be learning it later with "PRISMA" in a much More simplified way

// Creating a "connector function" that connects to Postgres

const {Pool} = require('pg');

const pool = new Pool({
    user: 'postgres',
    database: 'test',
    password: '$hadow10510',
    port: 8008
});

module.exports = pool;