import React from "react";

const Checkbox = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  checked,
  onChange,
  id,
  className,
  children }) => {
  let classNames = [color, className];
  return (
  <label className='checkbox'>
    <input
      type='checkbox'
      id={id !== undefined ? id : false}
      className={classNames.join(' ').trim()}
      disabled={disabled}
      required={required}
      checked={checked}
      name={name!== undefined ? name : false}
      onChange={onChange}
    />
    {children}
  </label>
)};

export default Checkbox;