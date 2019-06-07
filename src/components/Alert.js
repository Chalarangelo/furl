import React from 'react';
import { combineClassNames } from '../utilities/utils';

const Alert = ({
  fill = 'flat',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  className,
  children,
  ...rest }) => {
  let classNames = ['alert'];
  classNames.push(fill);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <div
      className={combineClassNames(classNames)}
      {...rest}>
      {children}
    </div>
  );
};

export default Alert;
