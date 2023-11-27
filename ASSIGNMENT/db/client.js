const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    database: 'gamestore',
    password: '$hadow10510',
    port: 8008
});

module.exports = client;