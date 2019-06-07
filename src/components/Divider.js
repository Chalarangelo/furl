import React from 'react';

const Divider = ({ vertical = false, className, ...rest }) =>
  vertical ? (
    <span className={['divider', className].join(' ').trim()} {...rest} role='separator'/>
  )
    : (
      <hr className={className} {...rest} />
    );

export default Divider; 