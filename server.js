'use strict';
var cors = require('cors');
var express = require('express');

var app = express();
app.use(cors());

// Serve the public directory to the root of the web server.
app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/api', function (req, res) {
  res.send('Welcome API World!');
});
app.get('/api/:name', function (req, res) {
  res.send('Welcome Mr./Ms. ' + req.params.name);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
