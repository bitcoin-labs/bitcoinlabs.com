(function() {
  module.exports = function(app) {
    return app.get('/', function(req, res, next) {
      return res.send('...');
    });
  };
}).call(this);
