import React from 'react';

import { factories } from '../../mdx.js';
import Content from './content.md';

export default class Index extends React.Component {
  render() {
    return (
      <Content factories={factories} />
    );
  }
}