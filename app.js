var express = require('express');

var homeController = require('./controllers/homeController');

var app = express();

// set up template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
homeController(app);

// Listen to port
var port = 3000;
app.listen(port);
console.log('Listening to port ' + port);
