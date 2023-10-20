// Where our tables will be created
// Creating a ASYNC function that creates tables - and that's also hooked up to our Postgres database via L4-5 (pool.js)

// Importing our "connector" function from pool.js
const pool = require('./pool')

const createTables = async () => {
    try {
        // creating an "authors" table with an id, a name, and an email column
        await pool.query(`
        CREATE TABLE IF NOT EXISTS authors (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL
        )
        `);

        // Creates a "posts" table that has a id, a publication date, and a title and an author id column
        // The author id column refers to the authors table - it references "authors(id)"
        // "ON DELETE CASCADE" means that if you delete an author, it will delete all the post associated with that author - the opposite would be "ON DELETE PROTECT" where if the author is deleted, all the posts will stay
        await pool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            pub_date DATE NOT NULL,
            title VARCHAR(255) NOT NULL,
            author_id INT REFERENCES authors(id) ON DELETE CASCADE
        )
        `);
        console.log('Tables created successfully');
    } catch (error) {
        console.error(error, 'Error creating tables:');
    }
};

module.exports = createTables
