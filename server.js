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

const PORT = 9000;






app.listen(9000);