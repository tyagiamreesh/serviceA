const express = require('express');
var os = require("os");
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, Welcome to service A! at '+os.hostname());
});

app.get('/hello', function(req, res) {
  res.send('Hello, Welcome to service A! at '+os.hostname());
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name + ' Welcome to service A! at '+os.hostname());
});

app.listen(5000, function () {
  console.log('Service A is running  at http://localhost:5000');
});