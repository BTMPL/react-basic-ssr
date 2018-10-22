
const express = require('express');
const path = require('path');

const renderUrl = require('./dist/server.js').default;

process.env.NODE_ENV = 'production';

var webpack = require('webpack');
var config = require('./config/webpack.ssr.js')(process.env);
var compiler = webpack(config);


const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.set('view engine', 'pug');

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {  
  const { html, sheet } = renderUrl(req.url);

  res.render(path.join(__dirname, 'src/public/index.pug'), {
    css: sheet.getStyleTags(),    
    app: html
  });
});

app.listen(3000, () => console.log('listening ...'));
