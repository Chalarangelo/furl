import React from "react";

const Progress = ({ 
  value = 0,
  max = 100,
  id, 
  className
}) => (
  <progress 
    value={value} max={max}
    id={id !== undefined ? id : false} className={className}
  >
    {`${+value/+max * 100}%`}
  </progress>
);

export default Progress;