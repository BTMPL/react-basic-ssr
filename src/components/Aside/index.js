import React from 'react';
import styled from 'styled-components';

const AsideContainer = styled.div`
  position: relative;
  margin-bottom: 1rem;
`;

export const Aside = styled.div`
  display: none;

  @media screen and (min-width: 1140px) {
    display: block;
    position: ${props => props.fixed ? 'fixed' : 'absolute'};
    top: 1rem;
    left: 50%;
    margin-left: -350px;
    transform: translateX(calc(-100% - 20px));
    width: 200px;  
    transition: 0.25s all;
  }
`;

export default class extends React.Component {

  static defaultProps = {
    fixedStyles: {},
    absoluteStyles: {}
  };

  state = {
    fixed: false
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  throttle = null;
  handleScroll = () => {
    if (this.throttle) return;
    if (!this.el) return;

    console.log('?');

    let fixed = false;
    if (this.el.getBoundingClientRect().top < 0) fixed = true;

    if (fixed !== this.state.fixed) {
      this.setState({
        fixed
      });
    }
    
    this.throttle = true;
    setTimeout(() => {
      this.throttle = false;
    }, 50);
  };

  el = null;
  setRef = el => this.el = el;

  render() {
    return (
      <AsideContainer innerRef={this.setRef}>
        <Aside fixed={this.state.fixed} style={this.state.fixed ? this.props.fixedStyles : this.props.absoluteStyles}>{this.props.aside}</Aside>
        {this.props.children}
      </AsideContainer>
    )
  }
}