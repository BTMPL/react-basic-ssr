import React, { createContext } from 'react';
import { MDXProvider } from '@mdx-js/tag'
import { Link, Router } from '@reach/router';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import 'prismjs/themes/prism.css';

import Layout, { Row, Col, Header } from './components/Layout';
import Hero from './components/Hero';
import Footer from './components/Footer';

import Index from './views/Index';
import Course from './views/Course/Course';

class Scroll extends React.PureComponent {

  render() {
    return null;
  }


  componentDidUpdate(props) {
    if (props['*'] !== this.props['*']) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}

export default class Main extends React.Component {

  state = {
    layout: {
      title: '',
      subtitle: '',
      image: ''
    }
  }

  setLayout = layout => {
    this.setState({
      layout: {
        ...this.state.layout,
        ...layout
      }
    });
  }

  render() {
    return (
      <Layout>
        <Helmet>
          <title>{[this.state.layout.title, this.state.layout.subtitle].filter(i => i).join(' / ')}</title>
        </Helmet>      
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
              <h1>{this.state.layout.title}</h1>
              <p>{this.state.layout.subtitle}</p>
            </Col>
          </Row>
        </Hero>
        <Row>
          <Col>
            <Router>
              <Index path="/" />
              <Course path="/kursy/:courseSlug/*" setLayout={this.setLayout} />
            </Router>
          </Col>
        </Row>
        <Footer />
        <Router>
          <Scroll path="/*" />
        </Router>        
      </Layout>
    
    )
  }
}