
express = require 'express'

app = express.createServer express.logger()

app.set 'views', "#{__dirname}/views"
app.set 'view engine', 'jade'
app.use express.bodyParser()
app.use app.router
app.use express.static "#{__dirname}/public"
app.use express.errorHandler()

require('./app')(app)

port = process.env.PORT or 3000
console.log "Listening on #{port}"
app.listen port

