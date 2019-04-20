import React from "react";

const Switch = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  checked,
  onChange,
  id,
  className,
  children }) => {
  let classNames = [color, 'switch-input', className];
  return (
    <label className='switch'>
      <input
        type='checkbox'
        id={id !== undefined ? id : false}
        className={classNames.join(' ').trim()}
        disabled={disabled}
        required={required}
        checked={checked}
        name={name !== undefined ? name : false}
        onChange={onChange}
      />
      {children}
    </label>
  )
};

export default Switch;