import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Anchor = ({ href, className, ...rest }) => (
  <a href={href} className={combineClassNames([className, 'anchor'])} {...rest}>
    {'#'}
  </a>
);

export default Anchor;
