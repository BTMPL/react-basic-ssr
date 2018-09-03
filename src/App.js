import React from 'react';
import { MDXProvider } from '@mdx-js/tag'
import { Link, Router } from '@reach/router';
import styled from 'styled-components';

import Hello from './hello.md';

const P = styled.p`
  font-size: 16px;
  color: #444;
  font-family: Tahoma;
`

export default () => {
  return (
    <Router>
      <Home path="/" />
      <Test path="/test" />
    </Router>
  )
}

export class Home extends React.Component {

  render() {
    return (
      <div>
        <P>Hello App</P>
        <Link to="/test">test</Link>
        
          <Hello />
        
      </div>
    );
  }
}

export const Test = () => {
  return (
    <div>
      <P>Test App</P>
      <Link to="/">home</Link>
    </div>
  )
}