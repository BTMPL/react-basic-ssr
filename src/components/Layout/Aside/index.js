import React from 'react';
import styled from 'styled-components';

const AsideContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
  display: flex;
`;


export const Aside = styled.div`
  display: none;
  position: relative;
  @media screen and (min-width: 1140px) {
    padding-bottom: 1rem;
    display: block;
    margin-left: -320px;
    margin-right: 40px;
    min-width: 280px;
    width: 280px;
  }
`;

export const Scroller = styled.div`
  display: block;
  position: sticky;
  padding-top: 2rem;
  top: 4rem;
  
`

const Content = styled.div`
  margin-top: 20px;
  padding-top: 14px;

  h1:first-child, h2:first-child, h3:first-child {
    margin-top: 0;
  }
`

export default class extends React.Component {


  render() {
    return (
      <AsideContainer innerRef={this.setRef}>
        <Aside>
          <Scroller>{this.props.aside}</Scroller>
        </Aside>
        <Content>
          {this.props.children}
        </Content>
      </AsideContainer>
    )
  }
}