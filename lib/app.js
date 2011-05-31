(function() {
  module.exports = function(app) {
    return app.get('/', function(req, res, next) {
      res.writeHead(302, {
        'Location': 'https://github.com/bitcoin-labs'
      });
      return res.end('');
    });
  };
}).call(this);
