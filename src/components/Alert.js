import React from 'react';

const Alert = ({
  fill = 'flat',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  className,
  children,
  ...rest }) => {
  let classNames = [];
  classNames.push(fill);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <div
      className={['alert', className, ...classNames].join(' ').trim()}
      {...rest}>
      {children}
    </div>
  );
};

export default Alert;
