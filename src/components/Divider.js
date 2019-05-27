import React from 'react';

const Divider = ({ vertical = false, id, className }) =>
  vertical ? (
    <div id={id !== undefined ? id : false} className={['divider', className].join(' ').trim()} />
  )
    : (
      <hr id={id !== undefined ? id : false} className={className} />
    );

export default Divider;
