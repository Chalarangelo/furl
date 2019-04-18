import React from "react";

const Progress = ({ 
  value = 0,
  max = 100,
  color = 'normal',
  size = 'normal',
  id, 
  className
}) => (
  <progress 
    value={value} max={max} id={id !== undefined ? id : false} 
    className={[color !== 'normal' ? color : '', size !== 'normal' ? sizes : '', className].join(' ').trim()}
  >
    {`${+value/+max * 100}%`}
  </progress>
);

export default Progress;