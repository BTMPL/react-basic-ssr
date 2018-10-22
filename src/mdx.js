import React from 'react';
import { Link } from '@reach/router';

export const factories = {
  a: (props, children) => {
    if (children === 'codesandbox') {
      return  <iframe src={`${props.href}?autoresize=1&codemirror=1&hidenavigation=1&editorsize=50&fontsize=12&runonclick=1`} />
    }
        
    if (props.href.indexOf('://') > -1) {
      return <a href={props.href} target='_blank'>{children}</a>
    }

    return <Link to={props.href}>{children}</Link>
  },

};