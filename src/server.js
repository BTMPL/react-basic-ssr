import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerLocation } from '@reach/router';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import Home from './App';

export default function(url) {
  const sheet = new ServerStyleSheet();

  return {
    sheet,
    html: renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <ServerLocation url={url}>
          <div>
            <Home />
          </div>
      </ServerLocation>
    </StyleSheetManager>)
  }
};