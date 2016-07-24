'use strict';

const path = require('path');
const compression = require('compression');
const express = require('express');
const server = express();
const port = 8090;

server
  .disable('x-powered-by')
  .use(compression());

server
  .use('/static', express.static(path.join(__dirname, '../../dist/')))
  .use('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/client/index.html'));
  });

server.listen(port);
process.on('exit', () => {
  server.close && server.close();
});
process.on('SIGINT', () => {
  process.exit(2);
});
module.exports = server;
