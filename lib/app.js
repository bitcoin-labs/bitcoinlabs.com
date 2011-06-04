(function() {
  module.exports = function(app) {
    app.get('/', function(req, res, next) {
      res.writeHead(302, {
        'Location': 'https://github.com/bitcoin-labs'
      });
      return res.end('');
    });
    return app.get('/list', function(req, res, next) {
      return res.render('list');
    });
  };
}).call(this);
