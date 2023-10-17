// FILE CONTAINING JUST COMMENTS & INFO FROM THE LESSON

//Database advantages
// 1. Real advantage of a database is we have permanent data - it's persistent. If you refresh a page with just say, an array, it will disappear, but with a database it won't
// 2. A database allows you to access information from anywhere in your application

// * You DON'T need a backend or a database, it just depends on what you're trying to build

// ****************************************************************************************************************

// RESTful APIs
// REST = RE-presentationaL S-tate T-ransfer
// RESTful apis are used to CRUD data in a database
// *  Apis are a way for applications to communicate with one another
// REST is a software architectural style which is a set of principles around designing Apis
// Principle example would be - when defining an api you need to specify the method, GET POST DELETE etc

// REST API BEST PRACTICES
// https://learn.microsoft.com/en-us/azure/architecture/best-practices/api-design

// ****************************************************************************************************************

// PUT VS PATCH
// PUT - replaces the existing data with new data
// PATCH - modifies the existing data 

// ****************************************************************************************************************

// TO OR NOT TO ADD A TRY/CATCH BLOCK
// Whenever we have an ASYNC function we should always have a try/catch block so that we can handle errors and provide additional information to the user (user experience)

// ****************************************************************************************************************

// MIDDLEWARE
// Middleware is an application within an application
// It's a set of useful tools that you can run in-between your requests

// Middleware is executed before a request is sent to the server
// Middleware functions can be used to modify the request or response objects
// Middleware can also perform authentication and authorization

// ****************************************************************************************************************

// DATABASES
// Collections of data that are organized and stored in a structured way

// SQL Databases (relational)
// * PostgreSQL, Microsoft SQL Server, MariaDB
// A relational database is a column/row database, similar to an Excel sheet (Postgres looks like this)
// Relational databases are the most common

// NoSQL Databases (non-relational)
// * CouchDB, MongoDB, Cassandra, Firebase, Redis
// Key/value pairs (DynamoDB)
// Graphs (Redis) - (almost looks like a network of nodes that are connected - think of social media - it's a relationship between different nodes/people)
// Document model (MongoDB)

// ****************************************************************************************************************

// SQL (Structured Query Language) is a query language used to communicate with and manipulate databases
// Data is stored in one or more tables ("relations") of columns and rows making it easy to see how different data structures relate to each other

// In pgAdmin you can create a new relational database that will be using Postgres 

// ****************************************************************************************************************

// PERN STACK
// PERN stack is a popular stack is a popular stack for full-stack web dev

// P - PostgreSQL
// E - Express.js
// R - React.js
// N - Node.js