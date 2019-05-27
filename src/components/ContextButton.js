import React from 'react';
import Button from './Button';

const ContextButton = ({
  text = 'normal',
  size = 'normal',
  color = 'plain',
  verticalPosition = 'bottom',
  horizontalPosition = 'right',
  onClick,
  id,
  className,
  children,
  ...rest}) => {
  let classNames = [className, `v-${verticalPosition}`, `h-${horizontalPosition}`, 'context-button'];
  return (
    <Button
      id={id}
      className={classNames.join(' ').trim()}
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
