var express = require('express');
var http = require('http');

var path = require('path');
var compression = require('compression');

var app = express();
var server = http.createServer(app);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('*.js', function (req, res, next) {
  res.setHeader('Content-Type', 'text/javascript');
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


var PORT = process.env.PORT || 8081


/* Start server */
server.listen(PORT, function (){
  console.log('Production Express server running at localhost:' + PORT);
});

module.exports = app;