(function() {
  var app, express, port;
  express = require('express');
  app = express.createServer(express.logger());
  require('./app')(app);
  port = process.env.PORT || 3000;
  console.log("Listening on " + port);
  app.listen(port);
}).call(this);
