import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IndexElement = styled.div`
  margin-bottom: 1rem;
`;

export default class extends React.Component {
  static propTypes = {
    padding: PropTypes.number,
    selector: PropTypes.func.isRequired,
    index: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired
      })
    )
  };
  static defaultProps = {
    padding: 30
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

  isSectionActive = slug => {
    if (typeof document === 'undefined') return;
    return;
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

  render() {
    return (
      <IndexElement>
        {this.props.index.map(item => {
          return (
            <div
              style={{
                fontWeight: this.isSectionActive(item.slug) ? "bold" : undefined
              }}
              key={item.slug}
            >
              <a href={`#${item.slug}`} onClick={(event) => this.handleClick(event, item)}>{item.name}</a>
            </div>
          );
        })}
      </IndexElement>
    );
  }
}