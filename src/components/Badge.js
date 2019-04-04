import React from "react";

const Badge = ({
  fill = 'flat',
  text = 'normal',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  id, 
  className, 
  children }) => {
  let classNames = [];
  classNames.push(fill);
  if (text !== 'normal') classNames.push(text);
  if (size !== 'normal') classNames.push(size);
  if (color !== 'plain') classNames.push(color);
  if (shape !== 'normal') classNames.push(shape);
  return (
  <span 
    id={id !== undefined ? id : false} 
    className={['badge', className, ...classNames].join(' ').trim()}>
    {children}
  </span>
)};

export default Badge;