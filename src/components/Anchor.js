import React from 'react';
import { combineClassNames, omitProps, combineStyles } from '../utilities/utils';

const Anchor = ({ href, className, ...rest }) => (
  <a 
    href={href} 
    className={combineClassNames([className, 'anchor'])} 
    style={combineStyles(rest, rest.style)}
    {...omitProps(rest)}
  >
    {'#'}
  </a>
);

export default Anchor;
