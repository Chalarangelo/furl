import React from 'react';

const Anchor = ({ href, className, ...rest }) => (
  <a href={href} className={[className, 'anchor'].join(' ').trim()} {...rest}>
    {'#'}
  </a>
);

export default Anchor;
