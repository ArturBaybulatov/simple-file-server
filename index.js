#!/usr/bin/env node

'use strict'

var connect = require('connect')
var http = require('http')
var serveStatic = require('serve-static')
var serveIndex = require('serve-index')
var morgan = require('morgan') // logger
var path = require('path')

var app = connect()

app.use(morgan('dev'))
app.use(serveStatic(path.resolve('.')))
app.use(serveIndex(path.resolve('.')))

http.createServer(app).listen(80)
