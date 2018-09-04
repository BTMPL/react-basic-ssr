import React from 'react';
import styled, { injectGlobal } from 'styled-components';

const Layout = styled.div`
  padding-top: 50px;
`;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 15px;
    line-height: 1.5;
    color: #444;
  }

  h1 {
    font-size: 3.2rem;
    margin: 2rem 0 0.5rem;
  }

  h2 {
    font-size: 2.4rem;
    margin: 1rem 0 0.5rem;
  }

  h3 {
    font-size: 1.6rem;
    margin: 1rem 0 0.5rem;
  }

  img {
    max-width: 100%;
  }

  pre {
    overflow: auto;
    max-width: 700px;
    background: #000;
    padding: 5px 10px;
    color: white;
    font-size: 0.9rem;

    @media screen and (max-width: 768px) {
      max-width: calc(100vw - 0.875rem - 0.875rem);
    }
  }

  pre + small {
    display: block;
    background: #909090;
    color: white;
    padding: 5px;
    margin-top: -15px;    
  }

  blockquote {
    padding: 1px 15px;
    margin: 15px 0;
    background: #fff7d0;
    border-left: 5px solid #ffe564;
  }
`

export default class extends React.Component {

  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    )
  }
}

export const Row = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const Col = styled.div`
  flex: 1;
  padding: 0 0.875rem;
`;

export const Header = styled.div`
  background: #0098ff;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 10;

  display: flex;
  justify-content: center;
  height: 50px;
  box-sizing: border-box;
`;
