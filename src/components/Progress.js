import React from 'react';

const Progress = ({
  value = 0,
  max = 100,
  color = 'normal',
  size = 'normal',
  id,
  className,
  ...rest
}) => (
  <progress
    value={value} max={max} id={id}
    className={[color !== 'normal' ? color : '', size !== 'normal' ? size : '', className].join(' ').trim()}
    {...rest}
  >
    {`${+value / +max * 100}%`}
  </progress>
);

export default Progress;
