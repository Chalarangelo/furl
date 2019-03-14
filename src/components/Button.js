import React from "react";

const Button = ({
  fill = 'solid', 
  text ='normal', 
  size = 'normal', 
  color='plain', 
  shape='normal',
  type='button', 
  disabled = false,
  onClick,
  children}) => {
  let classNames = [];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
    <button className={classNames.join(' ')}>
      {children}
    </button>
  )
};

export default Button;