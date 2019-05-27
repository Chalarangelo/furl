import React from 'react';

const Divider = ({ vertical = false, id, className, ...rest }) =>
  vertical ? (
    <div id={id} className={['divider', className].join(' ').trim()} {...rest} />
  )
    : (
      <hr id={id} className={className} {...rest} />
    );

export default Divider;
