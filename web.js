require('nodetime');
require('newrelic');
var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var app = express();
// app.use(function(req, res, next) {
//     if (req.headers['x-forwarded-proto'] != 'https') {
//         res.redirect('https://' + req.headers.host + req.path);
//     }
//     else {
//         return next();
//     }
// });
app.use(morgan('app'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);