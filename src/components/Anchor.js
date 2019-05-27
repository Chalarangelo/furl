import React from 'react';

const Anchor = ({ href, id, className }) => (
  <a id={id !== undefined ? id : false} href={href} className={[className, 'anchor'].join(' ').trim()}>
    {'#'}
  </a>
);

export default Anchor;
