var express = require('express');
var app = express();

// Load Express Configuration
require('./expressConfig')(app, express);

// Root route
app.get('/', function(req, res){
  res.sendfile('index.html', {root: app.settings.views});
});

// Load routes
require('./routes/course')(app); //course routes
require('./routes/standard')(app); // standard routes
require('./routes/domain')(app); // domain routes

module.exports = app;
