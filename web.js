require('nodetime');
require('newrelic');
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();

// app.use('/views', express.static(__dirname + '/views'));

// app.get('/views', function (req, res) {
//   var name = req.params.name;
//   res.render('views/' + name);
// });

// app.all('/*', function(req, res, next) {
//     res.sendfile('index.html', { root: __dirname });
// });

// app.all('*', function(req, res, next) {
//     res.sendfile('index.html', { root: __dirname });
// });


app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);