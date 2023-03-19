// mkdir my-api
// cd my-api
// npm init -y
// npm install express


const express = require('express');
const app = express();
const port = 3000;

// Define a route for the API
app.get('/api/hello', (req, res) => {
  res.send('<h1 style="text-align:center; color:orange;">Hello World!</h1>');

  // res.set('Content-Type', 'text/plain');
  // res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});


// mkdir my-api creates a new directory named "my-api".
// cd my-api changes the current working directory to "my-api".
// npm init -y initializes a new Node.js project with default settings.
// npm install express installs the Express.js framework as a project
//  dependency.
// const express = require('express'); imports the Express.js library 
// into the code.
// const app = express(); creates a new instance of the Express.js 
// application.
// const port = 3000; sets the port number for the server to listen on.
// app.get('/api/hello', (req, res) => {...}) defines a new route for 
// the API to respond to GET requests made to "/api/hello".
// res.send('Hello World!'); sends the response "Hello World!" when the 
// above route is requested.
// app.listen(port, () => {...}) starts the server on the specified port, 
// and logs a message to the console when the server is listening.