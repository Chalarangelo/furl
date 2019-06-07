import React from 'react';
import Button from './Button';
import { combineClassNames } from '../utilities/utils';

const ContextButton = ({
  text = 'normal',
  size = 'normal',
  color = 'plain',
  verticalPosition = 'bottom',
  horizontalPosition = 'right',
  onClick,
  className,
  children,
  ...rest}) => {
  let classNames = [className, `v-${verticalPosition}`, `h-${horizontalPosition}`, 'context-button'];
  return (
    <Button
      className={combineClassNames(classNames)}
      fill='solid'
      text={text}
      size={size}
      color={color}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default ContextButton;
