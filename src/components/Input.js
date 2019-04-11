import React from "react";

const TextInput = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  onChange,
  id,
  className
}) => {
  let classNames = [color, className];
  return (
    <input
      type='text'
      id={id !== undefined ? id : false}
      className={classNames.join(' ').trim()}
      disabled={disabled}
      required={required}
      name={name !== undefined ? name : false}
      onChange={onChange}
    />
  )
};

export {TextInput};