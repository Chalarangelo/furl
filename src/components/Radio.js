import React from "react";

const Radio = ({
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
  <label className='radio'>
    <input
      type='radio'
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

export default Radio;