var express = require('express');
var toDoController = require('./controlers.todoController');

var app = express();

// set up the template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
toDoController;

// listen to port
app.listen(3000);
console.log('You are listening to port 3000');
