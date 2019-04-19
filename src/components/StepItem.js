import React from "react";

const StepItem = ({ id, className, children}) => (
  <span id={id !== undefined ? id : false} className={['step-item', className].join(' ').trim()}>
    <span className='step-content'>{children}</span>
  </span>
);

export default StepItem;