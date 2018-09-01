import React from 'react';
import { Link, Router } from '@reach/router';
import styled from 'styled-components';

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

export const Home = () => {
  return (
    <div>
      <P>Hello App</P>
      <Link to="/test">test</Link>
    </div>
  );
}

export const Test = () => {
  return (
    <div>
      <P>Test App</P>
      <Link to="/">home</Link>
    </div>
  )
}