import React from 'react';

const Switch = ({
  color = 'plain',
  disabled = false,
  required = false,
  name,
  checked,
  onChange,
  id,
  className,
  children,
  ...rest }) => {
  let classNames = [color, 'switch-input', className];
  return (
    <label className='switch'>
      <input
        type='checkbox'
        id={id}
        className={classNames.join(' ').trim()}
        disabled={disabled}
        required={required}
        checked={checked}
        name={name}
        onChange={onChange}
        aria-label={`${children}`}
        {...rest}
      />
      {children}
    </label>
  );
};

export default Switch;
