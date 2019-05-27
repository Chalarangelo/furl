import React from 'react';

const Anchor = ({ href, id, className }) => (
  <a id={id} href={href} className={[className, 'anchor'].join(' ').trim()}>
    {'#'}
  </a>
);

export default Anchor;
