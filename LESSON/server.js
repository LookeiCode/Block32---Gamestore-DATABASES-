// ** Setting up the server **
// npm init -y
// npm i express nodemon body-parser
// npm i pg (allows us to connect our Postgres database to our Express application)

const express = require('express');
const bodyParser = require('body-parser');
// As the application/server starts, this function that was imported will be invoked into the server
const createTables = require('./utils/tables')

const app = express();
app.use(bodyParser.json());

createTables()

// app.use allows you to use methods from other files in the application (authors.js in this case)
// We're using it to "use" the POST request defined in authors.js

//      ↓ this here ↓ is the PREFIX (/api/authors) for all the routes defined in "authors.js"
app.use('/api/authors', require('./routes/authors'));

//                                                 app.use prefix  |    ↓    || ↓ | router.post (defined in authors.js)
// The endpoint to create a new author now would be localhost:8008/api/authors/new  <-- (the "new" part came from the POST we made in authors.js - remember the route defined in the app.use is merely a prefix )

app.use('/api/posts', require('./routes/posts'));


app.listen(9000);