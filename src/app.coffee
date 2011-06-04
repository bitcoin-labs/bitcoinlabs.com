
module.exports = (app) ->

  app.get '/', (req, res, next) ->
    res.writeHead 302, {'Location': 'https://github.com/bitcoin-labs'}
    res.end ''

  app.get '/list', (req, res, next) ->
    res.render 'list'
