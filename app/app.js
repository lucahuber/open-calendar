var express = require('express');

var homeController = require('./controllers/homeController');

var app = express();

// set up template engine
app.set('views', __dirname+'/views');
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire controllers
homeController(app);

// Listen to port
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
