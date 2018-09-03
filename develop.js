var path = require('path');
var express = require('express');

var app = express();
app.set('view engine', 'pug');

var webpack = require('webpack');
var config = require('./webpack.config.js')(process.env);
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', function(req, res) {
  res.render(path.join(__dirname, 'src', 'public', 'index.pug'));
});

var server = app.listen(8000, 'localhost', function(err) {
  if(err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:%d', server.address().port);
});