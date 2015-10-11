#!/usr/bin/env node

'use strict'

var connect = require('connect')
var serveStatic = require('serve-static')
var serveIndex = require('serve-index')
var morgan = require('morgan') // logger

connect()
  .use(morgan('dev'))
  .use(serveStatic('.'))
  .use(serveIndex('.'))
  .listen(process.env.PORT || 80)
