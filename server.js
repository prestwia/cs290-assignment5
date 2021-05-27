/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3000;

var twitData = require('./twitData.json')

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res, next) {
  res.status(200).render('index', {
    twits: twitData
  })
});

app.get('*', function (req, res) {
  res.status(404).render('404');
});


app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
