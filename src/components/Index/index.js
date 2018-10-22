import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link as RRLink } from '@reach/router';

const IndexElement = styled.div`
  margin-bottom: 2rem;
`;

const Link = styled(RRLink)`
  display: block;
  border-left: 4px solid transparent;
  padding-left: 5px;
  text-decoration: none;
  color: inherit;
  margin-bottom: 5px;

  ${props => props.active && 'border-left-color: #0098ff;'}
`;

const Level = styled.div``;
const SubLevel = styled.div`
  margin-left: 10px;
`;

export default class extends React.Component {
  static propTypes = {
    padding: PropTypes.number,
    selector: PropTypes.func,
    index: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
      })
    )
  };

  static defaultProps = {
    padding: 30,
    selector: () => null,
    onClick: null
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

    this.forceUpdate();
    this.throttle = true;
    setTimeout(() => {
      this.throttle = false;
    }, 50);
  };

  isSectionActive = ({
    slug,
    active
  }) => {
    if (typeof active !== undefined) {
      return active;
    }
    if (typeof document === 'undefined') return;

    // fins the last hidden section
    let foundActive = 0;

    this.props.index.forEach((item, index) => {
      // the first one, we always skip - we will use that one as default
      if (index === 0) return;


      const element = this.props.selector(item);
      if (!element) return;

      const bounding = element.getBoundingClientRect();

      const height = bounding.bottom - bounding.top + this.props.padding;

      let isActive = true;

      if (bounding.top > 0 + height) isActive = false;
      if (isActive) {
        foundActive = index;
      }
    });

    return this.props.index[foundActive].slug === slug;
  };

  handleClick = (event, item) => {
    if (this.props.onClick) {
      this.props.onClick(item);
      event.preventDefault();
    }
  }

  renderLevel = (item) => {
    return (
      <Level key={item.slug}>
        <Link active={this.isSectionActive(item)} to={`${item.slug}`} onClick={(event) => this.handleClick(event, item)}>{item.title}</Link>
        {item.items && (this.isSectionActive(item) || this.props.expand) && <SubLevel>{item.items.map(this.renderLevel)}</SubLevel>}
      </Level>
    );   
  }

  render() {
    return (
      <IndexElement>
        {this.props.index.map(this.renderLevel)}
      </IndexElement>
    );
  }
}