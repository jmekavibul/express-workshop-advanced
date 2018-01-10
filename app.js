var express = require('express');
var app = express();
var chalk = require('chalk');
var volleyball = require('volleyball');
var bodyParser = require('body-parser');

app.use(volleyball);

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.get('/', function (req, res, next) {
  res.send('Root Route');
});

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
