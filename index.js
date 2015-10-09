#!/usr/bin/env node

'use strict'

var connect = require('connect')
var http = require('http')
var serveStatic = require('serve-static')
var serveIndex = require('serve-index')
var morgan = require('morgan') // logger
var path = require('path')

var PATH = path.resolve(
  process.argv[2] || process.env.SERVER_PATH || '.'
)

var PORT = process.env.PORT || 80

var app = connect()

app.use(morgan('dev'))
app.use(serveStatic(PATH))
app.use(serveIndex(PATH))

http.createServer(app).listen(PORT)
