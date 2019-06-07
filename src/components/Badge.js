import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Badge = ({
  fill = 'flat',
  text = 'normal',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  className,
  children,
  ...rest }) => {
  let classNames = ['badge', className, fill];
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <span
      className={combineClassNames(classNames)}
      {...rest}>
      {children}
    </span>
  );
};

export default Badge;
