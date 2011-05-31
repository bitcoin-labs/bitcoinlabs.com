(function() {
  var app, express, port;
  express = require('express');
  app = express.createServer(express.logger());
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  require('./app')(app);
  port = process.env.PORT || 3000;
  console.log("Listening on " + port);
  app.listen(port);
}).call(this);
