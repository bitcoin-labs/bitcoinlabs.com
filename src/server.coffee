
express = require 'express'

app = express.createServer express.logger()

require('./app')(app)

port = process.env.PORT or 3000
console.log "Listening on #{port}"
app.listen port
