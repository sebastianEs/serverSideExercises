var express = require('express');
var app = express();
var route = require('./routes.js');
var pug = require('pug');
var port = 3000;

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', route);
app.listen(port);
console.log('server is now listening to: ' + port );