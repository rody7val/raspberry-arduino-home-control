var express = require("express");
var path = require('path');
var app = express();
var config = require('./config');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var api = require('./api')(app, express);
app.use('/', api);

app.listen(config.port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Listening on port '+config.port);
    }
});