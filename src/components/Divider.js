import React from 'react';

const Divider = ({ vertical = false, id, className, ...rest }) =>
  vertical ? (
    <span id={id} className={['divider', className].join(' ').trim()} {...rest} role='separator'/>
  )
    : (
      <hr id={id} className={className} {...rest} />
    );

export default Divider; 