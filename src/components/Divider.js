import React from 'react';

const Divider = ({ vertical = false, id, className }) =>
  vertical ? (
    <div id={id} className={['divider', className].join(' ').trim()} />
  )
    : (
      <hr id={id} className={className} />
    );

export default Divider;
