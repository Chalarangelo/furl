import React from "react";

const Checkbox = ({
  fill = 'flat',
  text = 'normal',
  size = 'normal',
  color = 'plain',
  shape = 'normal',
  id, 
  className }) => {
  let classNames = [];
  // classNames.push(fill);
  // if (text !== 'normal') classNames.push(text);
  // if (size !== 'normal') classNames.push(size);
  // if (color !== 'plain') classNames.push(color);
  // if (shape !== 'normal') classNames.push(shape);
  return (
  <input 
    type='checkbox'
    id={id !== undefined ? id : false} 
    className={[className, ...classNames].join(' ').trim()} />
)};

export default Checkbox;