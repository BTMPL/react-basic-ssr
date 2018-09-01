import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router'

import App from './App';

render(
  <Router>
    <App path="/*" />
  </Router>
, document.getElementById('root'));
