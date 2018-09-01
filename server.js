import React from 'react';
import express from 'express';
import path from 'path';
import App from './src/App';

import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'


const app = express();

app.set('view engine', 'pug');

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/bundle.js'));
});

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet()
  const html = renderToString(
    React.createElement(StyleSheetManager, {
      sheet: sheet.instance,
      children: React.createElement(ServerLocation, {
        url: req.url,
        children: React.createElement(App)
      })
    })
  );
  
  res.render(path.join(__dirname, 'src/public/index.pug'), {
    css: sheet.getStyleTags(),    
    app: html
  });
});

app.listen(3000, () => console.log('listening ...'));
