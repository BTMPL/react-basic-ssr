import React from 'react';
import express from 'express';
import path from 'path';
import { Home } from './src/App';

import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

const app = express();

app.set('view engine', 'pug');

app.use('/', express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  const sheet = new ServerStyleSheet()
  const html = renderToString(
    
        <Home />     
  );

  res.render(path.join(__dirname, 'src/public/index.pug'), {
    css: sheet.getStyleTags(),    
    app: html
  });
});

app.listen(3000, () => console.log('listening ...'));
