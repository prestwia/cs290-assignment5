/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name:
 * Email:
 */

/* import needed dependencies */
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

/* start express, set port */
var app = express();
var port = process.env.PORT || 3000;

/* get twit data from json */
var twitData = require('./twitData.json')

/* setup handlebars with main layout */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

/* set to render homepage with dynamic twits */
app.get('/', function(req, res, next) {
  res.status(200).render('index', {
    twits: twitData
  })
});

/* render page for individual twits */
app.get('/twits/:n', function (req, res, next) {
  var twitId = req.params.n;
  if (twitId >= 0 && twitId <= 7) {
    res.status(200).render('index', {
      twits: [twitData[twitId]]
    })
  }
  else {
    res.status(404).render('404');
  }
});

/* render 404 page */
app.get('*', function (req, res) {
  res.status(404).render('404');
});

/* listen on port set above */
app.listen(port, function () {
  console.log("== Server is listening on port", port);
});
