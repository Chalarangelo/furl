import React from 'react';

const Anchor = ({ href, id, className, ...rest }) => (
  <a id={id} href={href} className={[className, 'anchor'].join(' ').trim()} {...rest}>
    {'#'}
  </a>
);

export default Anchor;
