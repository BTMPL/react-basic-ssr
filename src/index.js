import React from 'react';
import { hydrate, render } from 'react-dom';
import { Router} from '@reach/router'

import App from './App';

render(
  <App path="/*" />
, document.getElementById('root'));

if(module.hot) {
  module.hot.accept();
}