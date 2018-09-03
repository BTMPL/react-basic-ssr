import React from 'react';
import { MDXProvider } from '@mdx-js/tag'
import { Link, Router } from '@reach/router';
import styled from 'styled-components';

import Layout, { Row, Col, Header } from './components/Layout';

import Hero from './components/Hero';
import Aside from './components/Aside';
import Index from './components/Index';

import Hello from './hello.md';

const P = styled.p`
  font-size: 16px;
  color: #444;
  font-family: Tahoma;
`

const index = [
  { name: "Section 1", slug: "section-1" },
  { name: "Section 2", slug: "section-2" },
  { name: "Section 3", slug: "section-3" }
];

export default () => {

  return (
    <Layout>
      <Header>
        <Row>
          <Col>
            :)
          </Col>
        </Row>
      </Header>  
      <Hero>
        <Row>
          <Col>
            <h1>Hello world</h1>
            <p>This is cool and pretty :)</p>
          </Col>
        </Row>
      </Hero>
      <Row>
        <Col>
          <Router>
            <Home path="/" />
            <Test path="/test" />
          </Router>
        </Col>
      </Row>
    </Layout>
  )
}

export class Home extends React.Component {

  render() {
    const padding = 150;

    return (
      <Aside aside={
        <Index
          index={index}
          padding={padding}
          selector={({ slug }) => document.querySelector(`a[name=${slug}]`)}
          onClick={({ slug }) => {
            window.scrollTo(0, document.querySelector(`a[name=${slug}]`).getBoundingClientRect().top + window.pageYOffset - (padding / 2));
          }}
        />} 
      fixedStyles={{
        top: 'calc(50px + 1rem)'
      }}>      
        <Hello />
      </Aside>      
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