import React from "react";

const StepItem = ({ id, selected = false, className, children}) => (
  <span id={id !== undefined ? id : false} className={['step-item', selected ? 'selected' : '', className].join(' ').trim()}>
    <span className='step-content'>{children}</span>
  </span>
);

export default StepItem;