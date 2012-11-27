var express = require('express');
var app = express();
var mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/test'),
    Schema = mongoose.Schema;

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

function clientErrorHandler(err, req, res, next) {
    if (req.xhr) {
	res.send(500, { error: 'Something blew up!' });
    } 
    else {
	next(err);
    }
}

function errorHandler(err, req, res, next) {
    res.status(500);
    res.send('error', { error: err });
}

app.get('/', function(req, res){
    res.send('Hello World\n');
});

app.listen(3000);
console.log('Listening on port 3000');
