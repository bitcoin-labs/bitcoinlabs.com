(function() {
  module.exports = function(app) {
    return app.get('/', function(req, res, next) {
      return response.send('...');
    });
  };
}).call(this);
